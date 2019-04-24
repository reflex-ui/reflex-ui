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

import { getAllVariantsButtonContainerProps } from '../all-variants/container';
import { createAnimatedRippleView } from '../createAnimatedRippleView';
import { getSurfaceRippleColor } from '../getSurfaceRippleColor';
import { getOutlinedShapedButtonContainerStyle } from './container';

export const getAnimatedOutlinedShapedButtonContainerStyle: ViewStyleGetter<
  SurfaceProps
> = props => ({
  ...getOutlinedShapedButtonContainerStyle(props),
  backgroundColor: getColor(suppressPressedState(props)),
});

const AnimatedRippleView = createAnimatedRippleView<SurfaceProps, SurfaceTheme>(
  getSurfaceRippleColor,
);

export const getAnimatedOutlinedShapedButtonSurfaceTheme: ComponentThemeGetter<
  ButtonProps,
  SurfaceTheme
> = () => ({
  component: AnimatedRippleView,
  getProps: getAllVariantsButtonContainerProps,
  getStyle: getAnimatedOutlinedShapedButtonContainerStyle,
});
