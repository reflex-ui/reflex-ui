/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  InteractionStateProps,
  RfxViewPropsBase,
  ViewTheme,
} from '@reflex-ui/core';
import {
  AnimatedElevationViewProps,
  useElevationAnimation,
} from '@reflex-ui/elevation-md';
import {
  AnimatedRippleViewProps,
  useRippleAnimation,
} from '@reflex-ui/ripple-md';
import React, { useState } from 'react';
import { LayoutChangeEvent, View } from 'react-native';
import { animated } from 'react-spring/native';

export interface AnimatedRippleElevationViewProps<ComponentProps>
  extends AnimatedRippleViewProps<ComponentProps>,
    AnimatedElevationViewProps<ComponentProps> {}

const AnimatedView = animated(View);

export const AnimatedRippleElevationView = <
  ComponentProps extends RfxViewPropsBase<ComponentProps, Theme> &
    InteractionStateProps,
  Theme extends ViewTheme<ComponentProps>
>(
  props: AnimatedRippleElevationViewProps<ComponentProps>,
): JSX.Element => {
  const {
    children,
    complexComponentProps,
    elevationDegree,
    onLayout,
    ...otherProps
  } = props;
  const { interactionState } = complexComponentProps;

  const [containerSize, setContainerSize] = useState({ height: 0, width: 0 });

  const onLayoutChanged = (event: LayoutChangeEvent) => {
    const { height, width } = event.nativeEvent.layout;
    setContainerSize({ height, width });
    if (onLayout) onLayout(event);
  };

  const { rippleContainerStyle, rippleMotionStyle } = useRippleAnimation({
    color: props.getRippleColor(props.complexComponentProps),
    containerSize,
    containerStyle: props.style,
    interactionState,
  });

  const {
    elevationContainerStyle,
    elevationMotionStyle,
  } = useElevationAnimation({
    containerStyle: props.style,
    elevationDegree,
    interactionState,
  });

  const renderedAnimatedElevationView = (
    // @ts-ignore
    <AnimatedView style={elevationMotionStyle} />
  );
  // @ts-ignore
  const renderedAnimatedRippleView = <AnimatedView style={rippleMotionStyle} />;

  return (
    <View {...otherProps} onLayout={onLayoutChanged}>
      <View style={elevationContainerStyle}>
        {renderedAnimatedElevationView}
        <View style={rippleContainerStyle}>{renderedAnimatedRippleView}</View>
      </View>
      {children}
    </View>
  );
};
