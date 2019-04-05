/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ListProps, ListTheme, ViewStyleGetter } from '@reflex-ui/core';

import { getSurfaceContainerStyle } from '../surface/theme';

export const getListContainerStyle: ViewStyleGetter<ListProps> = props => ({
  ...getSurfaceContainerStyle(props),
  borderRadius: 0,
  paddingVertical: 8,
});

export const listTheme: ListTheme = {
  getStyle: getListContainerStyle,
};
