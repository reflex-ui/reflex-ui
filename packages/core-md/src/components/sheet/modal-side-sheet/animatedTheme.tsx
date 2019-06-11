/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ModalSideSheetTheme,
  ModalSideSheetVariantsTheme,
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
  getModalSideSheetEndSurfaceStyle,
  getModalSideSheetStartSurfaceStyle,
} from './theme';

/*
 * TODO: We can try to improve the easing here to get close to
 * Material Design's cubic-bezier:
 * https://material.io/design/motion/speed.html#easing
 */
const animationConfig = { clamp: true, tension: 220, friction: 12 };
/**/

/*
 * Basic memoization implementation for CoplanarSideSheetVariant.Start
 */
let currentStartMaxWidth: number | string;
let currentStartComponent: ComponentType<PrimitiveComponentProps<SurfaceProps>>;
const createStartComponent = (maxWidth: number | string = 0) => {
  if (
    maxWidth === currentStartMaxWidth &&
    currentStartComponent !== undefined
  ) {
    return currentStartComponent;
  }

  const closeAnimationProps = {
    config: animationConfig,
    to: { translateX: -maxWidth },
  };

  const openAnimationProps = {
    config: animationConfig,
    from: { translateX: -maxWidth },
    to: { translateX: 0 },
  };

  currentStartMaxWidth = maxWidth;
  currentStartComponent = createAnimatedOpenCloseTransitionSurface<
    SurfaceProps,
    SurfaceTheme
  >({
    closeAnimationProps,
    openAnimationProps,
  });
  return currentStartComponent;
};
/**/

/*
 * Basic memoization implementation for CoplanarSideSheetVariant.End
 */
let currentEndMaxWidth: number | string;
let currentEndComponent: ComponentType<PrimitiveComponentProps<SurfaceProps>>;
const createEndComponent = (maxWidth: number | string = 0) => {
  if (maxWidth === currentEndMaxWidth && currentEndComponent !== undefined) {
    return currentEndComponent;
  }

  const closeAnimationProps = {
    config: animationConfig,
    to: { translateX: maxWidth },
  };

  const openAnimationProps = {
    config: animationConfig,
    from: { translateX: maxWidth },
    to: { translateX: 0 },
  };

  currentEndMaxWidth = maxWidth;
  currentEndComponent = createAnimatedOpenCloseTransitionSurface<
    SurfaceProps,
    SurfaceTheme
  >({
    closeAnimationProps,
    openAnimationProps,
  });
  return currentEndComponent;
};
/**/

export const getAnimatedModalSideSheetEndSurfaceStyle: ViewStyleGetter<
  SurfaceProps
> = props => {
  return {
    ...getModalSideSheetEndSurfaceStyle(props),
    display: 'flex',
  };
};

export const getAnimatedModalSideSheetStartSurfaceStyle: ViewStyleGetter<
  SurfaceProps
> = props => {
  return {
    ...getModalSideSheetStartSurfaceStyle(props),
    display: 'flex',
  };
};

/*
 * ModalSideSheetTheme.Start and ModalSideSheetTheme.End
 */

export const animatedModalSideSheetStartTheme: ModalSideSheetTheme = {
  getProps: () => ({ isOpenCloseTransitionAnimated: true }),
  surface: () => ({
    view: {
      getComponent: props =>
        createStartComponent(StyleSheet.flatten(props.style).maxWidth),
      getProps: getCommonModalSheetSurfaceProps,
      getStyle: getAnimatedModalSideSheetStartSurfaceStyle,
    },
  }),
};

export const animatedModalSideSheetEndTheme: ModalSideSheetTheme = {
  getProps: () => ({ isOpenCloseTransitionAnimated: true }),
  surface: () => ({
    view: {
      getComponent: props =>
        createEndComponent(StyleSheet.flatten(props.style).maxWidth),
      getProps: getCommonModalSheetSurfaceProps,
      getStyle: getAnimatedModalSideSheetEndSurfaceStyle,
    },
  }),
};

/*
 * ModalSideSheetVariantsTheme
 */

// tslint:disable-next-line:max-line-length
export const animatedModalSideSheetVariantsTheme: ModalSideSheetVariantsTheme = {
  end: animatedModalSideSheetEndTheme,
  start: animatedModalSideSheetStartTheme,
};
