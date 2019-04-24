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
  getMidElevationStylesByInteraction,
} from '../../../elevation';
import { getAllVariantsButtonContainerProps } from '../all-variants/container';
// tslint:disable-next-line:max-line-length
import { createAnimatedRippleElevationView } from '../createAnimatedRippleElevationView';
import { getSurfaceRippleColor } from '../getSurfaceRippleColor';
import { getXFabButtonContainerStyle } from './container';

const AnimatedRippleElevationView = createAnimatedRippleElevationView<
  SurfaceProps,
  SurfaceTheme
>(ElevationDegree.Mid, getSurfaceRippleColor);

export const getAnimatedXFabButtonContainerStyle: ViewStyleGetter<
  SurfaceProps
> = props => ({
  ...getXFabButtonContainerStyle(props),
  ...getMidElevationStylesByInteraction(InteractionType.Disabled),
  backgroundColor: getColor(suppressPressedState(props)),
});

export const getAnimatedXFabButtonSurfaceTheme: ComponentThemeGetter<
  ButtonProps,
  SurfaceTheme
> = () => ({
  component: AnimatedRippleElevationView,
  getProps: getAllVariantsButtonContainerProps,
  getStyle: getAnimatedXFabButtonContainerStyle,
});
