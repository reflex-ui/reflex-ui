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
import React from 'react';
import { View, ViewProps } from 'react-native';
import { animated } from 'react-spring/native';

import { useElevationAnimation } from './useElevationAnimation';

export interface AnimatedElevationViewProps<ComponentProps>
  extends BuiltInSimpleComponentProps<ComponentProps>,
    ViewProps {
  readonly children?: React.ReactNode;
}

const AnimatedView = animated(View);

export const AnimatedElevationView = <
  ComponentProps extends SurfacePropsBase<ComponentProps, Theme> &
    InteractionStateProps,
  Theme extends ViewTheme<ComponentProps>
>(
  props: AnimatedElevationViewProps<ComponentProps>,
): JSX.Element => {
  const { children, complexComponentProps, ...otherProps } = props;
  const { elevation = 0, interactionState } = complexComponentProps;

  const {
    elevationContainerStyle,
    elevationMotionStyle,
  } = useElevationAnimation({
    containerStyle: props.style,
    elevation,
    interactionState,
  });

  // @ts-ignore
  const renderedAnimatedView = <AnimatedView style={elevationMotionStyle} />;

  return (
    <View {...otherProps}>
      <View style={elevationContainerStyle}>{renderedAnimatedView}</View>
      {children}
    </View>
  );
};
