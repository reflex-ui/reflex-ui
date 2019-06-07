/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  BuiltInSimpleComponentProps,
  CoplanarSideSheetProps,
  CoplanarSideSheetTheme,
  CoplanarSideSheetVariantsTheme,
  ViewStyleGetter,
} from '@reflex-ui/core';
import { ComponentType } from 'react';
import { StyleSheet } from 'react-native';

import { createAnimatedOpenCloseTransitionSurfacePusher } from '../../surface';

import {
  getCoplanarSideSheetEndSurfaceStyle,
  getCoplanarSideSheetStartSurfaceStyle,
} from './theme';

/*
 * TODO: We can try to improve the easing here to get close to
 * Material Design's cubic-bezier:
 * https://material.io/design/motion/speed.html#easing
 */
const animationConfig = { clamp: true, tension: 170, friction: 20 };
/**/

/*
 * Basic memoization implementation for CoplanarSideSheetVariant.Start
 */
let currentStartMaxWidth: number | string;
let currentStartComponent: ComponentType<
  BuiltInSimpleComponentProps<CoplanarSideSheetProps>
>;
const createStartComponent = (maxWidth: number | string = 0) => {
  if (
    maxWidth === currentStartMaxWidth &&
    currentStartComponent !== undefined
  ) {
    return currentStartComponent;
  }

  const closePusherAnimationProps = {
    config: animationConfig,
    to: { maxWidth: 0, width: 0 },
  };

  const openPusherAnimationProps = {
    config: animationConfig,
    to: { maxWidth, width: maxWidth },
  };

  const closeSurfaceAnimationProps = {
    config: animationConfig,
    to: { translateX: -maxWidth },
  };

  const openSurfaceAnimationProps = {
    config: animationConfig,
    to: { translateX: 0 },
  };

  currentStartMaxWidth = maxWidth;
  currentStartComponent = createAnimatedOpenCloseTransitionSurfacePusher<
    CoplanarSideSheetProps,
    CoplanarSideSheetTheme
  >({
    closePusherAnimationProps,
    closeSurfaceAnimationProps,
    openPusherAnimationProps,
    openSurfaceAnimationProps,
  });
  return currentStartComponent;
};
/**/

/*
 * Basic memoization implementation for CoplanarSideSheetVariant.End
 */
let currentEndMaxWidth: number | string;
let currentEndComponent: ComponentType<
  BuiltInSimpleComponentProps<CoplanarSideSheetProps>
>;
const createEndComponent = (maxWidth: number | string = 0) => {
  if (maxWidth === currentEndMaxWidth && currentEndComponent !== undefined) {
    return currentEndComponent;
  }

  const closePusherAnimationProps = {
    config: animationConfig,
    to: { maxWidth: 0, width: 0 },
  };

  const openPusherAnimationProps = {
    config: animationConfig,
    to: { maxWidth, width: maxWidth },
  };

  const closeSurfaceAnimationProps = {
    config: animationConfig,
    to: { translateX: maxWidth },
  };

  const openSurfaceAnimationProps = {
    config: animationConfig,
    to: { translateX: 0 },
  };

  currentEndMaxWidth = maxWidth;
  currentEndComponent = createAnimatedOpenCloseTransitionSurfacePusher<
    CoplanarSideSheetProps,
    CoplanarSideSheetTheme
  >({
    closePusherAnimationProps,
    closeSurfaceAnimationProps,
    openPusherAnimationProps,
    openSurfaceAnimationProps,
  });
  return currentEndComponent;
};
/**/

export const getAnimatedCoplanarSideSheetStartSurfaceStyle: ViewStyleGetter<
  CoplanarSideSheetProps
> = props => ({
  ...getCoplanarSideSheetStartSurfaceStyle(props),
  display: 'flex',
});

export const getAnimatedCoplanarSideSheetEndSurfaceStyle: ViewStyleGetter<
  CoplanarSideSheetProps
> = props => ({
  ...getCoplanarSideSheetEndSurfaceStyle(props),
  display: 'flex',
});

/*
 * CoplanarSideSheetTheme.Start and CoplanarSideSheetTheme.End
 */

export const animatedCoplanarSideSheetStartTheme: CoplanarSideSheetTheme = {
  getComponent: props =>
    createStartComponent(StyleSheet.flatten(props.style).maxWidth),
  getStyle: getAnimatedCoplanarSideSheetStartSurfaceStyle,
};

export const animatedCoplanarSideSheetEndTheme: CoplanarSideSheetTheme = {
  getComponent: props =>
    createEndComponent(StyleSheet.flatten(props.style).maxWidth),
  getStyle: getAnimatedCoplanarSideSheetEndSurfaceStyle,
};

/*
 * CoplanarSideSheetVariantsTheme
 */

// tslint:disable-next-line:max-line-length
export const animatedCoplanarSideSheetVariantsTheme: CoplanarSideSheetVariantsTheme = {
  end: animatedCoplanarSideSheetEndTheme,
  start: animatedCoplanarSideSheetStartTheme,
};
