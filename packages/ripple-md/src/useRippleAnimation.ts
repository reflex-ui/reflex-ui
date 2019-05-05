/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { InteractionState, InteractionType, useTimeout } from '@reflex-ui/core';
import { useCallback, useState } from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { useSpring, UseSpringProps } from 'react-spring/native';

import { createComponentRippleStyles } from './createComponentRippleStyles';
import { RippleStyles } from './RippleStyles';

export interface RippleAnimationInput {
  readonly color: string;
  readonly containerSize: { height: number; width: number };
  readonly containerStyle: StyleProp<ViewStyle>;
  readonly interactionState: InteractionState;
  readonly maxDiameter?: number;
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
  maxDiameter,
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
