/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ModalSheetTheme,
  PrimitiveComponentProps,
  SurfaceProps,
  SurfaceTheme,
  ViewStyleGetter,
} from '@reflex-ui/core';
import { ComponentType } from 'react';
import { StyleSheet } from 'react-native';

import { createAnimatedOpenCloseTransitionSurface } from '../../surface';
// tslint:disable-next-line:max-line-length
import { getCommonModalSheetSurfaceProps } from '../getCommonModalSheetSurfaceProps';
import {
  getModalSheetBottomSurfaceStyle,
  getModalSheetTopSurfaceStyle,
} from './topBottomSheetTheme';

/*
 * TODO: We can try to improve the easing here to get close to
 * Material Design's cubic-bezier:
 * https://material.io/design/motion/speed.html#easing
 */
const animationConfig = { clamp: true, tension: 220, friction: 12 };
/**/

/*
 * Basic memoization implementation for ModalSheetVariant.Top
 */
let currentTopMaxHeight: number | string;
let currentTopComponent: ComponentType<PrimitiveComponentProps<SurfaceProps>>;
const createTopComponent = (maxHeight: number | string = 0) => {
  if (maxHeight === currentTopMaxHeight && currentTopComponent !== undefined) {
    return currentTopComponent;
  }

  const closeAnimationProps = {
    config: animationConfig,
    to: { translateY: -maxHeight },
  };

  const openAnimationProps = {
    config: animationConfig,
    from: { translateY: -maxHeight },
    to: { translateY: 0 },
  };

  currentTopMaxHeight = maxHeight;
  currentTopComponent = createAnimatedOpenCloseTransitionSurface<
    SurfaceProps,
    SurfaceTheme
  >({
    closeAnimationProps,
    openAnimationProps,
  });
  return currentTopComponent;
};
/**/

/*
 * Basic memoization implementation for ModalSheetVariant.Bottom
 */
let currentBottomMaxHeight: number | string;
let currentBottomComponent: ComponentType<
  PrimitiveComponentProps<SurfaceProps>
>;
const createBottomComponent = (maxHeight: number | string = 0) => {
  if (
    maxHeight === currentBottomMaxHeight &&
    currentBottomComponent !== undefined
  ) {
    return currentBottomComponent;
  }

  const closeAnimationProps = {
    config: animationConfig,
    to: { translateY: maxHeight },
  };

  const openAnimationProps = {
    config: animationConfig,
    from: { translateY: maxHeight },
    to: { translateY: 0 },
  };

  currentBottomMaxHeight = maxHeight;
  currentBottomComponent = createAnimatedOpenCloseTransitionSurface<
    SurfaceProps,
    SurfaceTheme
  >({
    closeAnimationProps,
    openAnimationProps,
  });
  return currentBottomComponent;
};
/**/

export const getAnimatedModalSheetTopSurfaceStyle: ViewStyleGetter<
  SurfaceProps
> = props => {
  return {
    ...getModalSheetTopSurfaceStyle(props),
    display: 'flex',
  };
};

export const getAnimatedModalSheetBottomSurfaceStyle: ViewStyleGetter<
  SurfaceProps
> = props => {
  return {
    ...getModalSheetBottomSurfaceStyle(props),
    display: 'flex',
  };
};

export const animatedModalSheetTopTheme: ModalSheetTheme = {
  getProps: () => ({ isOpenCloseTransitionAnimated: true }),
  surface: () => ({
    view: {
      getComponent: props =>
        createTopComponent(StyleSheet.flatten(props.style).maxHeight),
      getProps: getCommonModalSheetSurfaceProps,
      getStyle: getAnimatedModalSheetTopSurfaceStyle,
    },
  }),
};

export const animatedModalSheetBottomTheme: ModalSheetTheme = {
  getProps: () => ({ isOpenCloseTransitionAnimated: true }),
  surface: () => ({
    view: {
      getComponent: props =>
        createBottomComponent(StyleSheet.flatten(props.style).maxHeight),
      getProps: getCommonModalSheetSurfaceProps,
      getStyle: getAnimatedModalSheetBottomSurfaceStyle,
    },
  }),
};
