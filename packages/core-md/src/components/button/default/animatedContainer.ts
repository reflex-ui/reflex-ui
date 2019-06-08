/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ButtonProps,
  ComponentThemeGetter,
  getColor,
  suppressPressedState,
  SurfaceProps,
  SurfaceTheme,
  ViewStyleGetter,
} from '@reflex-ui/core';
import {
  createAnimatedRippleView,
  getSurfaceRippleColor,
} from '@reflex-ui/ripple-md';

import { getAllVariantsButtonContainerProps } from '../all-variants/container';
import { getDefaultButtonContainerStyle } from './container';

export const getAnimatedDefaultButtonContainerStyle: ViewStyleGetter<
  SurfaceProps
> = props => ({
  ...getDefaultButtonContainerStyle(props),
  backgroundColor: getColor(suppressPressedState(props)),
});

const AnimatedRippleView = createAnimatedRippleView<SurfaceProps, SurfaceTheme>(
  getSurfaceRippleColor,
);

export const getAnimatedDefaultButtonSurfaceTheme: ComponentThemeGetter<
  ButtonProps,
  SurfaceTheme
> = () => ({
  view: {
    getComponent: () => AnimatedRippleView,
    getProps: getAllVariantsButtonContainerProps,
    getStyle: getAnimatedDefaultButtonContainerStyle,
  },
});
