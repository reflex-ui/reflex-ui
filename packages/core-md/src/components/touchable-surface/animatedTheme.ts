/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  getColor,
  suppressPressedState,
  SurfaceProps,
  SurfaceTheme,
  TouchableSurfaceTheme,
  TouchableSurfaceVariantsTheme,
  ViewStyleGetter,
} from '@reflex-ui/core';
import {
  createAnimatedRippleView,
  getSurfaceRippleColor,
} from '@reflex-ui/ripple-md';
import merge from 'lodash/merge';

import {
  defaultTouchableSurfaceTheme,
  getCommonTouchableSurfaceSurfaceProps,
  getCommonTouchableSurfaceSurfaceStyle,
  getOverlayTouchableSurfaceSurfaceStyle,
  overlayTouchableSurfaceTheme,
} from './theme';

const AnimatedRippleView = createAnimatedRippleView<SurfaceProps, SurfaceTheme>(
  getSurfaceRippleColor,
);

export const getAnimatedCommonTouchableSurfaceSurfaceStyle: ViewStyleGetter<
  SurfaceProps
> = props => ({
  ...getCommonTouchableSurfaceSurfaceStyle(props),
  backgroundColor: getColor(suppressPressedState(props)),
});

export const getAnimatedOverlayTouchableSurfaceSurfaceStyle: ViewStyleGetter<
  SurfaceProps
> = props => ({
  ...getOverlayTouchableSurfaceSurfaceStyle(props),
  backgroundColor: getColor(suppressPressedState(props)),
});

export const partialAnimatedDefaultTouchableSurfaceTheme: Partial<
  TouchableSurfaceTheme
> = {
  surface: () => ({
    component: AnimatedRippleView,
    getProps: getCommonTouchableSurfaceSurfaceProps,
    getStyle: getAnimatedCommonTouchableSurfaceSurfaceStyle,
  }),
};

export const partialAnimatedOverlayTouchableSurfaceTheme: Partial<
  TouchableSurfaceTheme
> = {
  surface: () => ({
    component: AnimatedRippleView,
    getProps: getCommonTouchableSurfaceSurfaceProps,
    getStyle: getAnimatedOverlayTouchableSurfaceSurfaceStyle,
  }),
};

// tslint:disable-next-line:max-line-length
export const animatedDefaultTouchableSurfaceTheme: TouchableSurfaceTheme = merge<
  {},
  TouchableSurfaceTheme,
  Partial<TouchableSurfaceTheme>
>(
  {},
  defaultTouchableSurfaceTheme,
  partialAnimatedDefaultTouchableSurfaceTheme,
);

// tslint:disable-next-line:max-line-length
export const animatedOverlayTouchableSurfaceTheme: TouchableSurfaceTheme = merge<
  {},
  TouchableSurfaceTheme,
  Partial<TouchableSurfaceTheme>
>(
  {},
  overlayTouchableSurfaceTheme,
  partialAnimatedOverlayTouchableSurfaceTheme,
);

// tslint:disable-next-line:max-line-length
export const animatedTouchableSurfaceVariantsTheme: TouchableSurfaceVariantsTheme = {
  default: animatedDefaultTouchableSurfaceTheme,
  overlay: animatedOverlayTouchableSurfaceTheme,
};
