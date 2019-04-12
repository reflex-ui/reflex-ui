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

export const getListContainerStyle: ViewStyleGetter<
  SurfacePropsBase
> = props => ({
  ...getSurfaceContainerStyle(props),
  borderRadius: 0,
  flexWrap: 'nowrap',
  paddingVertical: 8,
});

export const listTheme: SurfaceTheme = {
  getStyle: getListContainerStyle,
};
