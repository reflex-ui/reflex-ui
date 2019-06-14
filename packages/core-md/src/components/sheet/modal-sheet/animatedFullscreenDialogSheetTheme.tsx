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
import { Platform } from 'react-native';

import { createAnimatedOpenCloseTransitionSurface } from '../../surface';
// tslint:disable-next-line:max-line-length
import { getCommonModalSheetSurfaceProps } from '../getCommonModalSheetSurfaceProps';
// tslint:disable-next-line:max-line-length
import { getModalFullscreenDialogSheetSurfaceStyle } from './fullscreenDialogSheetTheme';

/*
 * TODO: We can try to improve the easing here to get close to
 * Material Design's cubic-bezier:
 * https://material.io/design/motion/speed.html#easing
 */
const animationConfig = { clamp: true, tension: 220, friction: 12 };
/**/

/*
 * Basic memoization implementation
 */

let currentWindowHeight: number;
let currentComponent: ComponentType<PrimitiveComponentProps<SurfaceProps>>;
const createComponent = (windowHeight: number) => {
  if (windowHeight === currentWindowHeight && currentComponent !== undefined) {
    return currentComponent;
  }

  const closeAnimationProps = {
    config: { clamp: true, tension: 200, friction: 16 },
    from: { translateY: 0 },
    to: { opacity: 0.6, translateY: windowHeight },
  };

  const openAnimationProps = {
    config: animationConfig,
    from: { opacity: 0, scale: 0 },
    to: { opacity: 1, scale: 1 },
  };

  currentWindowHeight = windowHeight;
  currentComponent = createAnimatedOpenCloseTransitionSurface<
    SurfaceProps,
    SurfaceTheme
  >({
    closeAnimationProps,
    openAnimationProps,
  });

  return currentComponent;
};

export const getAnimatedModalFullscreenDialogSheetSurfaceStyle: ViewStyleGetter<
  SurfaceProps
> = props => {
  return {
    ...getModalFullscreenDialogSheetSurfaceStyle(props),
    display: 'flex',
    /*
     * Unfortunately React Native doesn't support transformOrigin property.
     *
     * Refs:
     * https://github.com/facebook/react-native/issues/1964
     * https://github.com/facebook/react-native/pull/2106
     */
    ...Platform.select({
      web: {
        transformOrigin: 'bottom right',
      },
    }),
  };
};

export const animatedModalFullscreenDialogSheetTheme: ModalSheetTheme = {
  getProps: props => ({
    isOpenCloseTransitionAnimated:
      props.isOpenCloseTransitionAnimated !== undefined
        ? props.isOpenCloseTransitionAnimated
        : true,
  }),
  surface: () => ({
    view: {
      getComponent: props => createComponent(props.dimensions.window.height),
      getProps: getCommonModalSheetSurfaceProps,
      getStyle: getAnimatedModalFullscreenDialogSheetSurfaceStyle,
    },
  }),
};
