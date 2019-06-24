/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ElementMeasurement,
  moveTransformPropsToTransformArray,
  PrimitiveComponentProps,
  SurfacePropsBase,
  useMeasure,
} from '@reflex-ui/core';
import { Ref, useCallback, useState } from 'react';
import { View } from 'react-native';
import {
  SpringConfig,
  SpringValue,
  useSpring,
  // UseSpringProps,
} from 'react-spring/native';

import { SliderPosition } from './SliderPosition';

export interface OpenCloseSliderTransitionAnimationInput<ComponentProps>
  extends PrimitiveComponentProps<ComponentProps> {
  readonly closeAnimationConfig?: SpringConfig;
  readonly hasPusher?: boolean;
  readonly openAnimationConfig?: SpringConfig;
  readonly position: SliderPosition;
  readonly ref?: Ref<View>;
}

export const getOpenSliderTransitionTo = (
  position: SliderPosition,
  value: number,
  hasPusher: boolean = false,
) => {
  switch (position) {
    case SliderPosition.Top:
    case SliderPosition.Bottom:
      return { translateY: 0, ...(hasPusher && { height: value }) };
    default:
      // handles SliderPosition.Start and SliderPosition.End
      return { translateX: 0, ...(hasPusher && { width: value }) };
  }
};

export const getCloseSliderTransitionTo = (
  position: SliderPosition,
  value: number,
  hasPusher: boolean = false,
) => {
  switch (position) {
    case SliderPosition.Top:
      return { translateY: -value, ...(hasPusher && { height: 0 }) };
    case SliderPosition.Bottom:
      return { translateY: value, ...(hasPusher && { height: 0 }) };
    case SliderPosition.End:
      return { translateX: value, ...(hasPusher && { width: 0 }) };
    default:
      // handles SliderPosition.Start
      return { translateX: -value, ...(hasPusher && { width: 0 }) };
  }
};

export const splitAnimationProps = (
  animationProps: {
    [x: string]: SpringValue<unknown>;
  },
  position: SliderPosition,
) => {
  if (position === SliderPosition.Top || position === SliderPosition.Bottom) {
    return {
      pusher: {
        height: animationProps.height,
      },
      slider: {
        translateY: animationProps.translateY,
      },
    };
  }

  return {
    pusher: {
      width: animationProps.width,
    },
    slider: {
      translateX: animationProps.translateX,
    },
  };
};

const defaultAnimationConfig = { clamp: true, tension: 220, friction: 12 };
/*
const closeSliderPusherStyle = {
  pusher: {
    height: '100%',
    position: 'absolute',
    transform: [{ translateY: -10000 }],
  },
  slider: {},
};

const closeSliderStyle = {
  slider: {
    position: 'absolute',
    // transform: [{ translateY: -10000 }],
    top: -10000,
  },
};
*/

const getCloseSliderPusherStyle = (
  position: SliderPosition,
): {
  pusher: SpringViewStyle;
  slider: SpringViewStyle;
} =>
  position === SliderPosition.Top || position === SliderPosition.Bottom
    ? {
        pusher: {
          height: '100%',
          position: 'absolute',
          transform: [{ translateY: 3000 }],
        },
        slider: {},
      }
    : {
        pusher: {
          position: 'absolute',
          transform: [{ translateX: 3000 }],
          width: '100%',
        },
        slider: {},
      };

const getCloseSliderStyle = (
  position: SliderPosition,
): {
  pusher: SpringViewStyle;
  slider: SpringViewStyle;
} =>
  position === SliderPosition.Top || position === SliderPosition.Bottom
    ? {
        pusher: {},
        slider: {
          position: 'absolute',
          ...(position === SliderPosition.Top
            ? { top: 3000 }
            : { bottom: 3000 }),
        },
      }
    : {
        pusher: {},
        slider: {
          ...(position === SliderPosition.Start
            ? { left: -3000 }
            : { right: 3000 }),
          position: 'absolute',
        },
      };

const emptyMeasurement = {
  height: 0,
  pageX: 0,
  pageY: 0,
  width: 0,
  x: 0,
  y: 0,
};
/**
 * We need to review this, ideally such a type should exist in react-spring
 * itself, or we should move it to another module.
 */
export interface SpringViewStyle {
  [index: string]:
    | SpringValue
    | number
    | string
    | undefined
    | {}
    | [{ [index: string]: SpringValue | number | string }];
}
/**/

export interface OpenCloseSliderTransitionAnimationOutput {
  readonly pusher?: SpringViewStyle;
  readonly slider: SpringViewStyle;
}

export const useOpenCloseSliderTransitionAnimation = <
  ComponentProps extends SurfacePropsBase<ComponentProps, Theme>,
  Theme
>(
  input: OpenCloseSliderTransitionAnimationInput<ComponentProps>,
): OpenCloseSliderTransitionAnimationOutput => {
  const {
    complexComponentProps,
    closeAnimationConfig,
    hasPusher,
    openAnimationConfig,
    position,
    ref,
  } = input;
  const {
    componentDidClose,
    componentDidOpen,
    isClosing,
    isOpen,
    isOpening,
  } = complexComponentProps;

  // const [isAnimationReady, setIsAnimationReady] = useState(false);
  const [measurement, setMeasurement] = useState<ElementMeasurement>(
    emptyMeasurement,
  );
  const { height, width } = measurement;
  const isMeasured = height !== 0 || width !== 0;
  const [closeSliderPusherStyle] = useState(() =>
    getCloseSliderPusherStyle(position),
  );
  const [closeSliderStyle] = useState(() => getCloseSliderStyle(position));

  useMeasure({ onMeasure: setMeasurement, ref, deps: [isOpen] });

  /*
   * This condition handles a point at which the component is measured
   * but not animating, so it's either open or close.
   * At this point we reset measurement so when we move to next state
   * (open or close) the component will be measured again.
   * That supports more flexibility, allowing components to change their sizes
   * dynamically after open or close, while animation
   * handles the new size when starting animating again.
   */
  if (isMeasured && !isOpening && !isClosing) setMeasurement(emptyMeasurement);
  /**/

  const value =
    position === SliderPosition.Top || position === SliderPosition.Bottom
      ? height
      : width;

  const onOpenRest = useCallback(() => {
    // tslint:disable-next-line:no-console
    console.log(
      // tslint:disable-next-line:max-line-length
      `useOpenCloseSliderTransitionAnimation().onOpenRest() - isMeasured: ${isMeasured} | value: ${value} | isOpen: ${isOpen} | isOpening: ${isOpening} | isClosing: ${isClosing} | p: ${position}`,
    );
    /*
     * Due to the nature of hooks, we cannot conditionally call useSpring(),
     * so we're always calling it and updating its animation values,
     * so we have this check here to make sure we do not call
     * componentDidOpen() if the component is not opening.
     */
    if (!isOpening || !isMeasured) return;
    /**/
    if (componentDidOpen !== undefined) componentDidOpen(complexComponentProps);
  }, [complexComponentProps, isMeasured]);

  const onCloseRest = useCallback(() => {
    // tslint:disable-next-line:no-console
    console.log(
      // tslint:disable-next-line:max-line-length
      `useOpenCloseSliderTransitionAnimation().onCloseRest() - isMeasured: ${isMeasured} | value: ${value} | isOpen: ${isOpen} | isOpening: ${isOpening} | isClosing: ${isClosing} | p: ${position}`,
    );
    /*
     * Due to the nature of hooks, we cannot conditionally call useSpring(),
     * so we're always calling it and updating its animation values,
     * so we have this check here to make sure we do not call
     * componentDidClose() if the component is not closing.
     */
    if (!isClosing || !isMeasured) return;
    /**/
    if (componentDidClose !== undefined) {
      componentDidClose(complexComponentProps);
    }
  }, [complexComponentProps, isMeasured]);

  /*
  const getSliderAnimation = () =>
    isOpen
      ? {
          config: openAnimationConfig || defaultAnimationConfig,
          // from: getCloseSliderTransitionTo(position, value, hasPusher),
          from: isMeasured
            ? getCloseSliderTransitionTo(position, value, hasPusher)
            : { translateY: -10000 },
          onRest: onOpenRest,
          to: getOpenSliderTransitionTo(position, value, hasPusher),
        }
      : {
          config: closeAnimationConfig || defaultAnimationConfig,
          onRest: onCloseRest,
          to: getCloseSliderTransitionTo(position, value, hasPusher),
        };
        */

  const getSliderAnimation = () => {
    // tslint:disable-next-line:no-console
    console.log(
      // tslint:disable-next-line:max-line-length
      `useOpenCloseSliderTransitionAnimation().getSliderAnimation() - isMeasured: ${isMeasured} | value: ${value} | isOpen: ${isOpen} | isOpening: ${isOpening} | isClosing: ${isClosing} | p: ${position}`,
    );
    console.log(
      'useOpenCloseSliderTransitionAnimation().getSliderAnimation() - measurement: ',
      measurement,
    );
    /**
     * This condition handles a point at which the component is open and
     * already animated, but we have reset the measurement after open.
     */
    if (isOpen && !isOpening && !isMeasured) {
      console.log(
        `useOpenCloseSliderTransitionAnimation().getSliderAnimation() - isOpen - RETURN EMPTY STYLE `,
      );
      return {};
    }
    /**/

    // if (isOpen && isOpening && !isMeasured) {
    if (((isOpen && isOpening) || (!isOpen && !isClosing)) && !isMeasured) {
      console.log(
        `useOpenCloseSliderTransitionAnimation().getSliderAnimation() - RETURN HIDDEN STYLE `,
      );
      const hiddenProps =
        position === SliderPosition.Top || position === SliderPosition.Bottom
          ? {
              height: 0,
              translateY: position === SliderPosition.Top ? -3000 : 3000,
            }
          : {
              translateX: position === SliderPosition.Start ? -3000 : 3000,
              width: 0,
            };
      return {
        config: openAnimationConfig || defaultAnimationConfig,
        from: hiddenProps,
        // onRest: onOpenRest,
        // ...(isMeasured && { onRest: onOpenRest }),
        to: hiddenProps,
      };
    }

    if (isOpen) {
      console.log(
        `useOpenCloseSliderTransitionAnimation().getSliderAnimation() - isOpen - from: `,
        getCloseSliderTransitionTo(position, value, hasPusher),
      );
      console.log(
        'useOpenCloseSliderTransitionAnimation().getSliderAnimation() - isOpen - to: ',
        getOpenSliderTransitionTo(position, value, hasPusher),
      );
      return {
        config: openAnimationConfig || defaultAnimationConfig,
        from: getCloseSliderTransitionTo(position, value, hasPusher),
        onRest: onOpenRest,
        // ...(isMeasured && { onRest: onOpenRest }),
        to: getOpenSliderTransitionTo(position, value, hasPusher),
      };
    }
    console.log(
      'useOpenCloseSliderTransitionAnimation().getSliderAnimation() - NOT isOpen - to: ',
      getCloseSliderTransitionTo(position, value, hasPusher),
    );
    return {
      config: closeAnimationConfig || defaultAnimationConfig,
      onRest: onCloseRest,
      to: getCloseSliderTransitionTo(position, value, hasPusher),
    };
  };

  /**
   * We need to start with default values, otherwise the first state transition
   * (e.g. close -> open) is not animated.
   */
  /*
  const [animationProps, setAnimationProps] = useState<UseSpringProps>(() =>
    getSliderAnimation(),
  );
  */
  /**/

  /**
   * We only want to update animation values
   * when isMeasured changes and is true.
   */
  /*
  useEffect(() => {
    if (!isMeasured) return;
    setAnimationProps(getSliderAnimation());
    if (!isAnimationReady) setIsAnimationReady(true);
  }, [isMeasured]);
  */
  const animationProps = getSliderAnimation();
  /**/

  const springAnimationProps = useSpring(animationProps);

  console.log(
    'useOpenCloseSliderTransitionAnimation() - springAnimationProps: ',
    springAnimationProps,
  );

  /**
   * If component is close and not opening nor closing,
   * or it's open and opening but not measured yet,
   * we return close style, which is a style that keeps
   * the open style of the component to allow proper measurement,
   * but hides it from screen so users can't see it
   * while waiting for measurement.
   */
  if (
    (!isOpen && !isOpening && !isClosing) ||
    (!isMeasured && isOpen && isOpening)
  ) {
    // tslint:disable-next-line:no-console
    console.log(
      // tslint:disable-next-line:max-line-length
      `useOpenCloseSliderTransitionAnimation() - RETURN close style - isMeasured: ${isMeasured} | value: ${value} | isOpen: ${isOpen} | isOpening: ${isOpening} | isClosing: ${isClosing} | p: ${position}`,
    );
    // debugger;
    return hasPusher ? closeSliderPusherStyle : closeSliderStyle;
  }
  /**/

  // tslint:disable-next-line:no-console
  console.log(
    // tslint:disable-next-line:max-line-length
    `useOpenCloseSliderTransitionAnimation() - RETURN motion style - isMeasured: ${isMeasured} | value: ${value} | isOpen: ${isOpen} | isOpening: ${isOpening} | isClosing: ${isClosing} | p: ${position}`,
  );

  // debugger;

  const splitProps = splitAnimationProps(springAnimationProps, position);

  /**
   * Component is animating (opening or closing)
   * and we have measurement, so let's return animation style.
   */
  if (hasPusher) {
    return {
      pusher: moveTransformPropsToTransformArray(splitProps.pusher),
      slider: moveTransformPropsToTransformArray(splitProps.slider),
    };
  }

  return { slider: moveTransformPropsToTransformArray(splitProps.slider) };
  /**/
};
