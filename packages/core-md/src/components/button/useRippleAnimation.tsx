/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  InteractionEvent,
  InteractionState,
  InteractionType,
  useTimeout,
} from '@reflex-ui/core';
import { useCallback, useState } from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import { useSpring, UseSpringProps } from 'react-spring/native';

interface RippleStyles {
  container: ViewStyle;
  ripple: ViewStyle;
}

interface Position2D {
  x: number;
  y: number;
}

enum AnimationKeyframe {
  PressIn = 'pressin',
  PressOut = 'pressout',
}

export interface RippledComponentState {
  readonly animationKeyframe: AnimationKeyframe;
  readonly height: number;
  readonly isAnimatingPressIn: boolean;
  readonly isAnimatingPressOut: boolean;
  readonly rippleStyles: RippleStyles;
  readonly width: number;
}

interface RippleDiameterCalculatorData {
  readonly height: number;
  readonly maxDiameter: number;
  readonly posX: number;
  readonly width: number;
}

type RippleDiameterCalculator = (data: RippleDiameterCalculatorData) => number;

const calculateRippleDiameter: RippleDiameterCalculator = ({
  height,
  maxDiameter = 300,
  posX,
  width,
}: RippleDiameterCalculatorData): number => {
  let diameter = Math.ceil(Math.sqrt(width * width + height * height));

  const dist = Math.round(Math.sqrt(Math.pow(posX - diameter / 2, 2)));
  const distRate = (dist * 1) / (diameter / 2) + 1.2;

  diameter *= distRate;

  return Math.min(diameter, maxDiameter);
};

interface RipplePositionCalculatorData {
  readonly diameter: number;
  readonly interactionPosition: Position2D;
}

type RipplePositionCalculator = (
  data: RipplePositionCalculatorData,
) => Position2D;

const calculateRipplePosition: RipplePositionCalculator = ({
  diameter,
  interactionPosition,
}) => ({
  x: interactionPosition.x - diameter / 2,
  y: interactionPosition.y - diameter / 2,
});

type InteractionPositionGetter = (
  interactionEvent?: InteractionEvent,
) => Position2D;

const getInteractionPosition: InteractionPositionGetter = interactionEvent => {
  let x = 0;
  let y = 0;

  if (interactionEvent) {
    x = (interactionEvent as GestureResponderEvent).nativeEvent.locationX;
    y = (interactionEvent as GestureResponderEvent).nativeEvent.locationY;
  }

  return { x, y };
};

interface RippleStylesCreatorData {
  readonly color: string;
  readonly diameter: number;
  readonly position: Position2D;
  readonly style: ViewStyle;
}

type RippleStylesCreator = (props: RippleStylesCreatorData) => RippleStyles;

const createRippleStyles: RippleStylesCreator = ({
  color,
  diameter,
  position,
  style,
}) => ({
  container: {
    borderRadius: style.borderRadius,
    overflow: 'hidden',
    zIndex: 0,
    ...StyleSheet.absoluteFillObject,
  },
  ripple: {
    backgroundColor: color,
    borderRadius: diameter / 2,
    height: diameter,
    left: position.x,
    opacity: 0,
    position: 'absolute',
    top: position.y,
    width: diameter,
  },
});

interface ComponentRippleStylesCreatorData {
  readonly color: string;
  readonly height: number;
  readonly interactionEvent?: InteractionEvent;
  readonly maxDiameter: number;
  readonly style: ViewStyle;
  readonly width: number;
}

type ComponentRippleStylesCreator = (
  props: ComponentRippleStylesCreatorData,
) => RippleStyles;

export const createComponentRippleStyles: ComponentRippleStylesCreator = ({
  color,
  height,
  interactionEvent,
  maxDiameter,
  style,
  width,
}) => {
  const interactionPosition = getInteractionPosition(interactionEvent);
  const diameter = calculateRippleDiameter({
    height,
    maxDiameter,
    posX: interactionPosition.x,
    width,
  });

  const position = calculateRipplePosition({ diameter, interactionPosition });

  return createRippleStyles({
    color,
    diameter,
    position,
    style,
  });
};

export interface RippleAnimationInput {
  readonly color: string;
  readonly containerSize: { height: number; width: number };
  readonly containerStyle: StyleProp<ViewStyle>;
  readonly interactionState: InteractionState;
}

export interface RippleAnimationOutput {
  readonly rippleContainerStyle: ViewStyle;
  readonly rippleMotionStyle: ViewStyle;
}

export const useRippleAnimation = ({
  color,
  containerSize,
  containerStyle,
  interactionState,
}: RippleAnimationInput): RippleAnimationOutput => {
  const [isAnimatingPressIn, setIsAnimatingPressIn] = useState(false);
  const [isShowingPressInAnimation, setIsShowingPressInAnimation] = useState(
    false,
  );
  const [isAnimatingPressOut, setIsAnimatingPressOut] = useState(false);
  const [rippleStyle, setRippleStyle] = useState<RippleStyles>({
    container: {},
    ripple: {},
  });
  const [animateToProps, setAnimateToProps] = useState<UseSpringProps>({
    config: { tension: 170, friction: 20 },
    from: { opacity: 0, scale: 0 },
    immediate: false,
    to: { opacity: 0, scale: 0 },
  });
  const animationProps = useSpring(animateToProps);

  /*
   * Press in animation.
   */
  let animationPressInDuration;
  if (isAnimatingPressIn) animationPressInDuration = 200;

  const onAnimationPressInComplete = useCallback(() => {
    setIsShowingPressInAnimation(true);
    setIsAnimatingPressIn(false);
  }, []);

  useTimeout(onAnimationPressInComplete, animationPressInDuration);
  /**/

  /*
   * Press out animation.
   */
  let animationPressOutDuration;
  if (isAnimatingPressOut) animationPressOutDuration = 600;

  const onAnimationPressOutComplete = useCallback(() => {
    setAnimateToProps({ immediate: true, to: { opacity: 0, scale: 0 } });
    setIsAnimatingPressOut(false);
    setRippleStyle({ container: {}, ripple: {} });
  }, []);

  useTimeout(onAnimationPressOutComplete, animationPressOutDuration);
  /**/

  const { event: interactionEvent, type: interactionType } = interactionState;
  const maxDiameter = 300;

  const shouldStartPressInAnimation = () =>
    interactionType === InteractionType.Pressed &&
    !isAnimatingPressIn &&
    !isShowingPressInAnimation &&
    !isAnimatingPressOut;

  const shouldStartPressOutAnimation = () =>
    interactionType !== InteractionType.Pressed &&
    !isAnimatingPressOut &&
    !isAnimatingPressIn &&
    isShowingPressInAnimation;

  if (shouldStartPressInAnimation()) {
    setRippleStyle(
      createComponentRippleStyles({
        /*
         * We should always provide a backgroundColor,
         * otherwise red is used to communicate that there's a problem
         * (unless you're expecting red :P).
         */
        color,
        /**/
        height: containerSize.height,
        interactionEvent,
        maxDiameter,
        style: StyleSheet.flatten(containerStyle),
        width: containerSize.width,
      }),
    );
    setIsAnimatingPressIn(true);
    setAnimateToProps({
      config: { tension: 170, friction: 20 },
      immediate: false,
      to: { opacity: 1, scale: 1 },
    });
  } else if (shouldStartPressOutAnimation()) {
    setIsShowingPressInAnimation(false);
    setIsAnimatingPressOut(true);
    setAnimateToProps({
      config: { tension: 85, friction: 20 },
      immediate: false,
      to: { opacity: 0 },
    });
  }

  const finalRippleStyle = {
    ...rippleStyle.ripple,
    opacity: animationProps.opacity,
    transform: [{ scale: animationProps.scale }],
  };

  return {
    rippleContainerStyle: rippleStyle.container,
    /*
     * We need to investigate if react-spring has a TypeScript type
     * that could be used for any View component,
     * something like AnimatedViewProps that extends React Native's ViewProps.
     */
    // @ts-ignore
    rippleMotionStyle: finalRippleStyle,
    /**/
  };
};
