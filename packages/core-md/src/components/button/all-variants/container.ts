/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  Size,
  SurfaceProps,
  ViewPropsGetter,
  ViewStyleGetter,
} from '@reflex-ui/core';
import { getElevationStyles } from '@reflex-ui/elevation-md';

import {
  getTouchableSurfaceSurfaceProps,
  getTouchableSurfaceSurfaceStyle,
} from '../../touchable-surface/theme';

export const getAllVariantsButtonContainerProps: ViewPropsGetter<
  SurfaceProps
> = props => ({
  ...getTouchableSurfaceSurfaceProps(props),
});

export const getAllVariantsButtonContainerStyle: ViewStyleGetter<
  SurfaceProps
> = props => ({
  ...getTouchableSurfaceSurfaceStyle(props),
  alignItems: 'center',
  borderRadius: props.size === Size.XL || props.size === Size.XXL ? 6 : 4,
  flexDirection: 'row',
  justifyContent: 'center',
  ...(props.elevation !== 0 &&
    props.elevation !== undefined &&
    props.elevation !== null &&
    getElevationStyles(props.elevation)),
});
