/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  BuiltInSimpleComponentProps,
  ButtonProps,
  ComponentThemeGetter,
  Elevation,
  ElevationDegree,
  getColor,
  suppressPressedState,
  SurfaceProps,
  SurfaceTheme,
  ViewStyleGetter,
} from '@reflex-ui/core';
import { getElevationStyles } from '@reflex-ui/elevation-md';
// tslint:disable-next-line:max-line-length
import { createAnimatedRippleElevationView } from '@reflex-ui/ripple-elevation-md';
import { getSurfaceRippleColor } from '@reflex-ui/ripple-md';
import { ComponentType } from 'react';

import { getAllVariantsButtonContainerProps } from '../all-variants/container';
import { getFabButtonContainerStyle } from './container';

/*
 * Basic memoization implementation.
 */
let currentElevation: Elevation;
let currentComponent: ComponentType<BuiltInSimpleComponentProps<SurfaceProps>>;
const createComponent = (elevation: Elevation = ElevationDegree.Mid) => {
  if (elevation === currentElevation && currentComponent !== undefined) {
    return currentComponent;
  }

  currentElevation = elevation;
  currentComponent = createAnimatedRippleElevationView<
    SurfaceProps,
    SurfaceTheme
  >(elevation, getSurfaceRippleColor);
  return currentComponent;
};
/**/

export const getAnimatedFabButtonContainerStyle: ViewStyleGetter<
  SurfaceProps
> = props => ({
  ...getFabButtonContainerStyle(props),
  ...getElevationStyles(0),
  backgroundColor: getColor(suppressPressedState(props)),
});

export const getAnimatedFabButtonSurfaceTheme: ComponentThemeGetter<
  ButtonProps,
  SurfaceTheme
> = props => ({
  component: createComponent(props.elevation),
  getProps: getAllVariantsButtonContainerProps,
  getStyle: getAnimatedFabButtonContainerStyle,
});
