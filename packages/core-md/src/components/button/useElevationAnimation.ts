/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { InteractionState, InteractionType, isIOS } from '@reflex-ui/core';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { useSpring } from 'react-spring/native';

import {
  convertInteractionToElevation,
  ElevationDegree,
  getElevationStyles,
} from '../../elevation';

interface RaiseStyles {
  container: ViewStyle;
  shadow: ViewStyle;
}

type RaiseStylesCreator = (style: ViewStyle) => RaiseStyles;

const createRaiseStyles: RaiseStylesCreator = style => ({
  container: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 0,
  },
  shadow: {
    backgroundColor: style.backgroundColor,
    borderRadius: style.borderRadius,
    ...StyleSheet.absoluteFillObject,
  },
});

interface MotionRaiseStylesCreatorData {
  readonly elevationDegree: ElevationDegree;
  readonly interactionType: InteractionType;
}

type MotionRaiseStylesCreator = (
  props: MotionRaiseStylesCreatorData,
) => ViewStyle;

export const createMotionRaiseStyles: MotionRaiseStylesCreator = ({
  elevationDegree,
  interactionType,
}) => {
  const elevation = convertInteractionToElevation(
    interactionType,
    elevationDegree,
  );

  // We do this to avoid mutating the original object
  const styles = JSON.parse(JSON.stringify(getElevationStyles(elevation)));

  /*
   * We flatten values here to animate them.
   */
  if (isIOS && styles.shadowOffset) {
    styles.height = styles.shadowOffset.height;
    styles.width = styles.shadowOffset.width;
    delete styles.shadowOffset;
  }
  /**/

  return styles;
};

export interface ElevationAnimationInput {
  readonly containerStyle: StyleProp<ViewStyle>;
  readonly elevationDegree: ElevationDegree;
  readonly interactionState: InteractionState;
}

export interface ElevationAnimationOutput {
  readonly elevationContainerStyle: ViewStyle;
  readonly elevationMotionStyle: ViewStyle;
}

export const useElevationAnimation = ({
  containerStyle,
  elevationDegree,
  interactionState,
}: ElevationAnimationInput): ElevationAnimationOutput => {
  const elevationStyle = createRaiseStyles(StyleSheet.flatten(containerStyle));
  const animationProps = useSpring({
    config: { friction: 10, tension: 100 },
    to: {
      ...createMotionRaiseStyles({
        elevationDegree,
        interactionType: interactionState.type,
      }),
    },
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
  const elevationMotionStyle = { ...elevationStyle.shadow, ...animationStyle };

  return {
    elevationContainerStyle: elevationStyle.container,
    elevationMotionStyle,
  };
};
