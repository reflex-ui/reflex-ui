/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ElementMeasurement,
  PrimitiveComponentProps,
  SurfacePropsBase,
  useMeasure,
} from '@reflex-ui/core';
import { Ref, useCallback, useState } from 'react';
import { View } from 'react-native';
import { UseSpringProps } from 'react-spring';

import { SliderPosition } from './SliderPosition';
// tslint:disable-next-line:max-line-length
import { useOpenCloseTransitionAnimation } from './useOpenCloseTransitionAnimation';

export interface OpenCloseSliderTransitionAnimationInput<ComponentProps>
  extends PrimitiveComponentProps<ComponentProps> {
  // TODO: add support to receive react-spring's AnimationProps
  // readonly animationProps?: AnimationProps;
  readonly isPusher?: boolean;
  readonly position: SliderPosition;
  readonly ref?: Ref<View>;
}

export const getOpenSliderTransitionTo = (
  position: SliderPosition,
  value: number,
  isPusher: boolean = false,
) => {
  switch (position) {
    case SliderPosition.Top:
    case SliderPosition.Bottom:
      return isPusher ? { height: value } : { translateY: 0 };
    case SliderPosition.Start:
    case SliderPosition.End:
      return isPusher ? { width: value } : { translateX: 0 };
    default:
      return isPusher ? { width: value } : { translateX: 0 };
  }
};

export const getCloseSliderTransitionTo = (
  position: SliderPosition,
  value: number,
  isPusher: boolean = false,
) => {
  switch (position) {
    case SliderPosition.Top:
      return isPusher ? { height: 0 } : { translateY: -value };
    case SliderPosition.Bottom:
      return isPusher ? { height: 0 } : { translateY: value };
    case SliderPosition.Start:
      return isPusher ? { width: 0 } : { translateX: -value };
    case SliderPosition.End:
      return isPusher ? { width: 0 } : { translateX: value };
    default:
      return isPusher ? { width: 0 } : { translateX: value };
  }
};

export const useOpenCloseSliderTransitionAnimation = <
  ComponentProps extends SurfacePropsBase<ComponentProps, Theme>,
  Theme
>(
  input: OpenCloseSliderTransitionAnimationInput<ComponentProps>,
) => {
  const { complexComponentProps, isPusher, position, ref } = input;
  const { isClosing, isOpen, isOpening } = complexComponentProps;
  const animationConfig = { clamp: true, tension: 220, friction: 12 };

  const [prevIsOpen, setPrevIsOpen] = useState(isOpen);
  if (isOpen !== prevIsOpen) {
    setPrevIsOpen(isOpen);
  }

  const [measurement, setMeasurement] = useState({
    height: 0,
    pageX: 0,
    pageY: 0,
    width: 0,
    x: 0,
    y: 0,
  });
  const { height, width } = measurement;

  const setSize = useCallback(
    (newMeasurement: ElementMeasurement) => {
      // tslint:disable-next-line:no-console
      console.log(
        'useOpenCloseSliderTransitionAnimation().setSize() - newMeasurement: ',
        newMeasurement,
      );
      if (!isOpen && !isOpening && !isClosing) {
        // tslint:disable-next-line:no-console
        console.log(
          // tslint:disable-next-line:max-line-length
          'useOpenCloseSliderTransitionAnimation().setSize() - RESET - newMeasurement: ',
          newMeasurement,
        );
        if (width !== 0 && height !== 0) {
          setMeasurement({
            height: 0,
            pageX: 0,
            pageY: 0,
            width: 0,
            x: 0,
            y: 0,
          });
        }
        return;
      }
      if (newMeasurement.width !== width || newMeasurement.height !== height) {
        setMeasurement(newMeasurement);
      }
    },
    [isOpen, isOpening, isClosing, width, height],
  );

  // useMeasure({ onMeasure: setSize, ref, deps: [isOpen] });

  const value =
    position === SliderPosition.Top || SliderPosition.Bottom ? height : width;
  // if (!isOpen && !isOpening && !isClosing && prevIsOpen) value = 0;

  const shouldHoldAnimation = value === 0 ? true : false;

  if (!isOpen && !isOpening && !isClosing && prevIsOpen) {
    // tslint:disable-next-line:no-console
    console.log(
      // tslint:disable-next-line:max-line-length
      'useOpenCloseSliderTransitionAnimation() - WAS OPEN BUT CLOSED - RESET SIZE ',
    );
    setMeasurement({
      height: 0,
      pageX: 0,
      pageY: 0,
      width: 0,
      x: 0,
      y: 0,
    });
  }

  useMeasure({ onMeasure: setSize, ref, deps: [isOpen] });

  // tslint:disable-next-line:no-console
  console.log(
    // tslint:disable-next-line:max-line-length
    `useOpenCloseSliderTransitionAnimation() - measurement.height: ${
      measurement.height
      // tslint:disable-next-line:max-line-length
    } | shouldHoldAnimation: ${shouldHoldAnimation} | isOpen: ${isOpen} | isOpening: ${isOpening} | isClosing: ${isClosing} | prevIsOpen: ${prevIsOpen}`,
  );

  const onCloseRest = useCallback(() => {
    // tslint:disable-next-line:no-console
    console.log(
      'useOpenCloseSliderTransitionAnimation().onCloseRest() RESET SIZE',
    );
    setSize({ height: 0, pageX: 0, pageY: 0, width: 0, x: 0, y: 0 });
    // setWidth(0);
    // setHeight(0);
  }, []);

  const closeAnimationProps: UseSpringProps = {
    config: animationConfig,
    // delay: shouldHoldAnimation ? 10000 : 0,
    // from: getOpenSliderTransitionTo(position, value, isPusher),
    onRest: onCloseRest,
    // reset: true,
    // to: getCloseSliderTransitionTo(position, value, isPusher),
    ...(!shouldHoldAnimation && {
      to: getCloseSliderTransitionTo(position, value, isPusher),
    }),
  };

  const onOpenRest = useCallback(() => {
    // tslint:disable-next-line:no-console
    console.log(
      'useOpenCloseSliderTransitionAnimation().onOpenRest() RESET SIZE',
    );
    setSize({ height: 0, pageX: 0, pageY: 0, width: 0, x: 0, y: 0 });
    // setWidth(0);
    // setHeight(0);
  }, []);

  const openAnimationProps: UseSpringProps = {
    config: animationConfig,
    // delay: shouldHoldAnimation ? 10000 : 0,
    // from: getCloseSliderTransitionTo(position, value, isPusher),
    onRest: onOpenRest,
    // reset: true,
    // to: getOpenSliderTransitionTo(position, value, isPusher),
    ...(!shouldHoldAnimation && {
      from: getCloseSliderTransitionTo(position, value, isPusher),
      to: getOpenSliderTransitionTo(position, value, isPusher),
    }),
  };

  const animation = useOpenCloseTransitionAnimation({
    closeAnimationProps,
    complexComponentProps,
    openAnimationProps,
  });

  if (shouldHoldAnimation || (!isOpen && !isOpening && !isClosing)) {
    // tslint:disable-next-line:no-console
    console.log('useOpenCloseSliderTransitionAnimation() RETURN CLOSED STYLES');
    return {
      height: '100%',
      position: 'absolute',
      transform: [{ translateY: -10000 }],
    };
  }

  return animation;
};

/*
export const useOpenCloseSliderTransitionAnimation = <
  ComponentProps extends SurfacePropsBase<ComponentProps, Theme>,
  Theme
>(
  input: OpenCloseSliderTransitionAnimationInput<ComponentProps>,
) => {
  const { complexComponentProps, isPusher, position } = input;
  const { enableOnLayout, isOpen, layoutRectangle } = complexComponentProps;
  const animationConfig = { clamp: true, tension: 220, friction: 12 };
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  if (enableOnLayout) {
    if (
      isOpen &&
      layoutRectangle !== undefined &&
      layoutRectangle.width !== 0 &&
      layoutRectangle.height !== 0 &&
      width === 0 &&
      height === 0
    ) {
      console.log('useOpenCloseSliderTransitionAnimation() - set size');
      if (layoutRectangle.width !== width) setWidth(layoutRectangle.width);
      if (layoutRectangle.height !== height) setHeight(layoutRectangle.height);
    }
  } else {
    if (width === 0) {
      setWidth(complexComponentProps.dimensions.window.width / 2);
    }
    if (height === 0) {
      setHeight(complexComponentProps.dimensions.window.height / 2);
    }
  }

  const shouldHoldAnimation = width === 0 && height === 0 ? true : false;

  const value =
    position === SliderPosition.Top || SliderPosition.Bottom ? height : width;

  const closeAnimationProps: UseSpringProps = {
    config: animationConfig,
    // delay: shouldHoldAnimation ? 10000 : 0,
    to: getCloseSliderTransitionTo(position, value, isPusher),
  };

  const onOpenRest = useCallback(() => {
    console.log('useOpenCloseSliderTransitionAnimation().onOpenRest()');
    setWidth(0);
    setHeight(0);
  }, []);

  const openAnimationProps: UseSpringProps = {
    config: animationConfig,
    // delay: shouldHoldAnimation ? 10000 : 0,
    from: getCloseSliderTransitionTo(position, value, isPusher),
    onRest: onOpenRest,
    to: getOpenSliderTransitionTo(position, value, isPusher),
  };

  console.log(
    `useOpenCloseSliderTransitionAnimation() - position: ${position} |
    value: ${value} | shouldHoldAnimation: ${shouldHoldAnimation}`,
  );
  console.log(
    'useOpenCloseSliderTransitionAnimation() - layoutRectangle: ',
    layoutRectangle,
  );

  const animation = useOpenCloseTransitionAnimation({
    closeAnimationProps,
    complexComponentProps,
    openAnimationProps,
  });

  if (shouldHoldAnimation) {
    return {
      height: '100%',
      position: 'absolute',
      transform: [{ translateY: -10000 }],
    };
  }

  return animation;
};
*/
