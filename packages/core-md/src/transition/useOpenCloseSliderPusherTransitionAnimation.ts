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
import { Ref, useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import {
  SpringConfig,
  SpringValue,
  useSpring,
  UseSpringProps,
} from 'react-spring/native';

import { SliderPosition } from './SliderPosition';

export interface OpenCloseSliderPusherTransitionAnimationInput<ComponentProps>
  extends PrimitiveComponentProps<ComponentProps> {
  readonly closeAnimationConfig?: SpringConfig;
  readonly openAnimationConfig?: SpringConfig;
  readonly position: SliderPosition;
  readonly ref?: Ref<View>;
}

export const getOpenSliderTransitionTo = (
  position: SliderPosition,
  value: number,
) => {
  switch (position) {
    case SliderPosition.Top:
    case SliderPosition.Bottom:
      return { height: value, translateY: 0 };
    case SliderPosition.Start:
    case SliderPosition.End:
      return { width: value, translateX: 0 };
    default:
      return { width: value, translateX: 0 };
  }
};

export const getCloseSliderTransitionTo = (
  position: SliderPosition,
  value: number,
) => {
  switch (position) {
    case SliderPosition.Top:
      return { height: 0, translateY: -value };
    case SliderPosition.Bottom:
      return { height: 0, translateY: value };
    case SliderPosition.Start:
      return { width: 0, translateX: -value };
    case SliderPosition.End:
      return { width: 0, translateX: value };
    default:
      return { width: 0, translateX: value };
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
      height: animationProps.width,
    },
    slider: {
      translateY: animationProps.translateX,
    },
  };
};

const defaultAnimationConfig = { clamp: true, tension: 220, friction: 12 };
const closeStyle = {
  pusher: {
    height: '100%',
    position: 'absolute',
    transform: [{ translateY: -10000 }],
  },
  slider: {},
};
const emptyMeasurement = {
  height: 0,
  pageX: 0,
  pageY: 0,
  width: 0,
  x: 0,
  y: 0,
};

export const useOpenCloseSliderPusherTransitionAnimation = <
  ComponentProps extends SurfacePropsBase<ComponentProps, Theme>,
  Theme
>(
  input: OpenCloseSliderPusherTransitionAnimationInput<ComponentProps>,
) => {
  const {
    complexComponentProps,
    closeAnimationConfig,
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

  const [measurement, setMeasurement] = useState<ElementMeasurement>(
    emptyMeasurement,
  );
  const { height, width } = measurement;
  const isMeasured = height !== 0 || width !== 0;

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
    position === SliderPosition.Top || SliderPosition.Bottom ? height : width;

  const onOpenRest = useCallback(() => {
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

  const getSliderAnimation = () =>
    isOpen
      ? {
          config: openAnimationConfig || defaultAnimationConfig,
          from: getCloseSliderTransitionTo(position, value),
          onRest: onOpenRest,
          to: getOpenSliderTransitionTo(position, value),
        }
      : {
          config: closeAnimationConfig || defaultAnimationConfig,
          onRest: onCloseRest,
          to: getCloseSliderTransitionTo(position, value),
        };

  /**
   * We need to start values here, otherwise the first state transition
   * (e.g. close -> open) is not animated.
   */
  const [animationProps, setAnimationProps] = useState<UseSpringProps>(() =>
    getSliderAnimation(),
  );
  /**/

  /**
   * We only want to update animation values
   * when isMeasured changes and is true.
   */
  useEffect(() => {
    if (!isMeasured) return;
    setAnimationProps(getSliderAnimation());
  }, [isMeasured]);
  /**/

  const springAnimationProps = useSpring(animationProps);

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
      `useOpenCloseSliderPusherTransitionAnimation() - RETURN closeStyle - isMeasured: ${isMeasured} | isOpen: ${isOpen} | isOpening: ${isOpening} | isClosing: ${isClosing} | p: ${position}`,
    );
    return closeStyle;
  }
  /**/

  /**
   * Component is animating (opening or closing)
   * and we have measurement, so let's return animation style.
   */
  const splitProps = splitAnimationProps(springAnimationProps, position);
  // tslint:disable-next-line:no-console
  console.log(
    // tslint:disable-next-line:max-line-length
    `useOpenCloseSliderPusherTransitionAnimation() - RETURN motion style - isMeasured: ${isMeasured} | isOpen: ${isOpen} | isOpening: ${isOpening} | isClosing: ${isClosing} | p: ${position}`,
  );
  return {
    pusher: moveTransformPropsToTransformArray(splitProps.pusher),
    slider: moveTransformPropsToTransformArray(splitProps.slider),
  };
  /**/
};
