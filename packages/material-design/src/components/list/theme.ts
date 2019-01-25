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
  OptionalListTheme,
  rawListTheme,
  ViewStyleGetter,
} from '@reflex-ui/core';
import merge from 'lodash/merge';

export const getListContainerStyle: ViewStyleGetter<ListProps> = props => ({
  backgroundColor: getThemedColor(props),
  flexGrow: 1,
  flexShrink: 1,
  paddingVertical: 8,
});

export const partialListTheme: OptionalListTheme = {
  container: {
    getStyle: getListContainerStyle,
  },
};

export const listTheme: ListTheme = merge({}, rawListTheme, partialListTheme);
