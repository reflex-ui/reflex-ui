/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  getThemedColor,
  ListProps,
  ListTheme,
  ViewStyleGetter,
} from '@reflex-ui/core';

import { getSizingStyle } from '../../sizing/getSizingStyle';

export const getListContainerStyle: ViewStyleGetter<ListProps> = props => ({
  backgroundColor: getThemedColor(props),
  paddingVertical: 8,
  ...getSizingStyle(props),
});

export const listTheme: ListTheme = {
  container: {
    getStyle: getListContainerStyle,
  },
};
