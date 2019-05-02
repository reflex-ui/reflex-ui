/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  BuiltInSimpleComponentProps,
  InteractionStateProps,
  SurfacePropsBase,
  ViewTheme,
} from '@reflex-ui/core';
import React, { useState } from 'react';
import { LayoutChangeEvent, View, ViewProps } from 'react-native';
import { animated } from 'react-spring/native';

import { useRippleAnimation } from './useRippleAnimation';

export type RippleColorGetter<ComponentProps> = (
  props: ComponentProps,
) => string;

export interface AnimatedRippleViewProps<ComponentProps>
  extends BuiltInSimpleComponentProps<ComponentProps>,
    ViewProps {
  readonly children?: React.ReactNode;
  readonly getRippleColor: RippleColorGetter<ComponentProps>;
}

const AnimatedView = animated(View);

export const AnimatedRippleView = <
  ComponentProps extends SurfacePropsBase<ComponentProps, Theme> &
    InteractionStateProps,
  Theme extends ViewTheme<ComponentProps>
>(
  props: AnimatedRippleViewProps<ComponentProps>,
): JSX.Element => {
  const { children, complexComponentProps, onLayout, ...otherProps } = props;
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

  /*
   * It seems that there's some type definition bug
   * in react-spring causing the error below. See this link:
   * github.com/react-spring/react-spring/issues/642#issuecomment-488072147
   * Remove ts-ignore when that bug is fixed.
   */
  // @ts-ignore error TS2589: Type instantiation
  // is excessively deep and possibly infinite.
  const renderedAnimatedView = <AnimatedView style={rippleMotionStyle} />;

  return (
    <View {...otherProps} onLayout={onLayoutChanged}>
      <View style={rippleContainerStyle}>{renderedAnimatedView}</View>
      {children}
    </View>
  );
};
