/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  SurfaceProps,
  SurfaceTheme,
  TouchableSurfaceTheme,
} from '@reflex-ui/core';
import {
  createAnimatedRippleView,
  getSurfaceRippleColor,
} from '@reflex-ui/ripple-md';
import merge from 'lodash/merge';

import {
  getTouchableSurfaceSurfaceStyle,
  touchableSurfaceTheme,
} from './theme';

const AnimatedRippleView = createAnimatedRippleView<SurfaceProps, SurfaceTheme>(
  getSurfaceRippleColor,
);

export const partialAnimatedTouchableSurfaceTheme: Partial<
  TouchableSurfaceTheme
> = {
  surface: () => ({
    component: AnimatedRippleView,
    getStyle: getTouchableSurfaceSurfaceStyle,
  }),
};

export const animatedTouchableSurfaceTheme: TouchableSurfaceTheme = merge<
  {},
  TouchableSurfaceTheme,
  Partial<TouchableSurfaceTheme>
>({}, touchableSurfaceTheme, partialAnimatedTouchableSurfaceTheme);
