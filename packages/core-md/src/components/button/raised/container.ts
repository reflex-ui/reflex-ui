/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ButtonProps,
  ComponentThemeGetter,
  ElevationDegree,
  SurfaceProps,
  SurfaceTheme,
  ViewStyleGetter,
} from '@reflex-ui/core';
import { getElevationStyles } from '@reflex-ui/elevation-md';

import { getAllVariantsButtonContainerProps } from '../all-variants/container';
import { getContainedButtonContainerStyle } from '../contained/container';

export const getRaisedButtonContainerStyle: ViewStyleGetter<
  SurfaceProps
> = props => ({
  ...getContainedButtonContainerStyle(props),
  ...getElevationStyles(
    props.elevation || ElevationDegree.Low,
    props.interactionState.type,
  ),
});

export const getRaisedButtonSurfaceTheme: ComponentThemeGetter<
  ButtonProps,
  SurfaceTheme
> = () => ({
  getProps: getAllVariantsButtonContainerProps,
  getStyle: getRaisedButtonContainerStyle,
});
