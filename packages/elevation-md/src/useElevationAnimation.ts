/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Elevation, InteractionState, isIOS } from '@reflex-ui/core';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { useSpring } from 'react-spring/native';

import { createElevationContainerStyle } from './createElevationContainerStyle';
import { createElevationShadowStyle } from './createElevationShadowStyle';
// tslint:disable-next-line:max-line-length
import { createMotionElevationShadowStyle } from './createMotionElevationShadowStyle';

export interface ElevationAnimationInput {
  readonly containerStyle: StyleProp<ViewStyle>;
  readonly elevation: Elevation;
  readonly interactionState: InteractionState;
}

export interface ElevationAnimationOutput {
  readonly elevationContainerStyle: ViewStyle;
  readonly elevationMotionStyle: ViewStyle;
}

export const useElevationAnimation = ({
  containerStyle,
  elevation,
  interactionState,
}: ElevationAnimationInput): ElevationAnimationOutput => {
  const elevationContainerStyle = createElevationContainerStyle();
  const elevationShadowStyle = createElevationShadowStyle(
    StyleSheet.flatten(containerStyle),
  );
  const animationProps = useSpring({
    config: { friction: 10, tension: 100 },
    to: createMotionElevationShadowStyle(elevation, interactionState.type),
  });

  let animationStyle = animationProps;
  if (isIOS) {
    animationStyle = {
      shadowColor: animationProps.shadowColor,
      shadowOffset: {
        // @ts-ignore
        height: animationProps.height || 0,
        width: animationProps.width || 0,
      },
      shadowOpacity: animationProps.shadowOpacity,
      shadowRadius: animationProps.shadowRadius,
    };
  }
  const elevationMotionStyle = { ...elevationShadowStyle, ...animationStyle };

  return {
    elevationContainerStyle,
    elevationMotionStyle,
  };
};
