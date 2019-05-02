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
  InteractionType,
  suppressPressedState,
  SurfaceProps,
  SurfaceTheme,
  ViewStyleGetter,
} from '@reflex-ui/core';
import {
  ElevationDegree,
  getLowElevationStylesByInteraction,
} from '@reflex-ui/elevation-md';
// tslint:disable-next-line:max-line-length
import { createAnimatedRippleElevationView } from '@reflex-ui/ripple-elevation-md';
import { getSurfaceRippleColor } from '@reflex-ui/ripple-md';

import { getAllVariantsButtonContainerProps } from '../all-variants/container';
import { getRaisedButtonContainerStyle } from './container';

const AnimatedRippleElevationView = createAnimatedRippleElevationView<
  SurfaceProps,
  SurfaceTheme
>(ElevationDegree.Low, getSurfaceRippleColor);

export const getAnimatedRaisedButtonContainerStyle: ViewStyleGetter<
  SurfaceProps
> = props => ({
  ...getRaisedButtonContainerStyle(props),
  ...getLowElevationStylesByInteraction(InteractionType.Disabled),
  backgroundColor: getColor(suppressPressedState(props)),
});

export const getAnimatedRaisedButtonSurfaceTheme: ComponentThemeGetter<
  ButtonProps,
  SurfaceTheme
> = () => ({
  component: AnimatedRippleElevationView,
  getProps: getAllVariantsButtonContainerProps,
  getStyle: getAnimatedRaisedButtonContainerStyle,
});
