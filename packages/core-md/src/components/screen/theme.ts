/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { SurfaceProps, SurfaceTheme, ViewStyleGetter } from '@reflex-ui/core';

import { getSurfaceContainerStyle } from '../surface/theme';

export const getScreenContainerStyle: ViewStyleGetter<
  SurfaceProps
> = props => ({
  ...getSurfaceContainerStyle(props),
  borderRadius: 0,
  flex: props.flex !== undefined ? props.flex : 1,
  flexDirection: props.flexDirection || 'column',
  flexWrap: props.flexWrap || 'nowrap',
});

export const screenTheme: SurfaceTheme = {
  getStyle: getScreenContainerStyle,
};
