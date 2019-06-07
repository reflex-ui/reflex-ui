/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  InteractionStateProps,
  SurfacePropsBase,
  useTimeout,
} from '@reflex-ui/core';
import {
  AnimatedElevationViewProps,
  useElevationAnimation,
} from '@reflex-ui/elevation-md';
import {
  AnimatedRippleViewProps,
  ElementMeasure,
  useRippleAnimation,
} from '@reflex-ui/ripple-md';
import React, {
  forwardRef,
  MutableRefObject,
  Ref,
  useRef,
  useState,
} from 'react';
import { View } from 'react-native';
import { animated } from 'react-spring/native';

export interface AnimatedRippleElevationViewProps<ComponentProps>
  extends AnimatedRippleViewProps<ComponentProps>,
    AnimatedElevationViewProps<ComponentProps> {}

const AnimatedView = animated(View);

export const AnimatedRippleElevationView = forwardRef(
  <
    ComponentProps extends SurfacePropsBase<ComponentProps, Theme> &
      InteractionStateProps,
    Theme
  >(
    props: AnimatedRippleElevationViewProps<ComponentProps>,
    ref: Ref<View>,
  ): JSX.Element => {
    const { children, complexComponentProps, onLayout, ...otherProps } = props;
    const { elevation = 0, interactionState } = complexComponentProps;

    let viewRef: Ref<View> = useRef(null);
    if (ref) viewRef = ref;
    const [elementMeasure, setElementMeasure] = useState<ElementMeasure>({
      height: 0,
      pageX: 0,
      pageY: 0,
      width: 0,
      x: 0,
      y: 0,
    });

    /*
     * In my tests if we don't use a timeout, i.e., we just use
     * a useEffect(), measure() returns zero for all values.
     * When testing with 10 miliseconds I could also see
     * zero returned a few times. 50 miliseconds worked for all tests.
     */
    useTimeout(() => {
      if (
        viewRef === undefined ||
        viewRef === null ||
        (viewRef as MutableRefObject<View>).current === undefined ||
        (viewRef as MutableRefObject<View>).current === null
      ) {
        return;
      }
      (viewRef as MutableRefObject<View>).current.measure(
        (x, y, width, height, pageX, pageY) =>
          setElementMeasure({ height, pageX, pageY, width, x, y }),
      );
    }, 50);

    const { rippleContainerStyle, rippleMotionStyle } = useRippleAnimation({
      color: props.getRippleColor(props.complexComponentProps),
      containerStyle: props.style,
      elementMeasure,
      interactionState,
    });

    const {
      elevationContainerStyle,
      elevationMotionStyle,
    } = useElevationAnimation({
      containerStyle: props.style,
      elevation,
      interactionState,
    });

    const renderedAnimatedElevationView = (
      // @ts-ignore
      <AnimatedView style={elevationMotionStyle} />
    );
    // @ts-ignore
    const renderedAnimatedRippleView = (
      <AnimatedView style={rippleMotionStyle} />
    );

    return (
      <View key="rippleElevationSurface" {...otherProps} ref={viewRef}>
        <View key="rippleElevationContainer" style={elevationContainerStyle}>
          {renderedAnimatedElevationView}
          <View style={rippleContainerStyle}>{renderedAnimatedRippleView}</View>
        </View>
        {children}
      </View>
    );
  },
);
