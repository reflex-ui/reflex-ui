/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  SurfacePropsBase,
  SurfaceTheme,
  ViewStyleGetter,
} from '@reflex-ui/core';

import { getSurfaceContainerStyle } from '../surface/theme';

export const getScreenContainerStyle: ViewStyleGetter<
  SurfacePropsBase
> = props => ({
  ...getSurfaceContainerStyle(props),
  borderRadius: 0,
  flex: 1,
  flexDirection: 'column',
  flexWrap: 'nowrap',
});

export const screenTheme: SurfaceTheme = {
  getStyle: getScreenContainerStyle,
};
