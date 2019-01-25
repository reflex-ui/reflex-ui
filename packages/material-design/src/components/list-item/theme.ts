/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  getThemedColor,
  ListItemProps,
  ListItemTheme,
  OptionalListItemTheme,
  rawListItemTheme,
  ViewStyleGetter,
} from '@reflex-ui/core';
import merge from 'lodash/merge';

export const getListItemContainerStyle: ViewStyleGetter<
  ListItemProps
> = props => ({
  backgroundColor: getThemedColor(props),
  flexGrow: 1,
  flexShrink: 1,
  justifyContent: 'center',
  minHeight: 48,
});

export const partialListItemTheme: OptionalListItemTheme = {
  container: {
    getStyle: getListItemContainerStyle,
  },
};

export const listItemTheme: ListItemTheme = merge(
  {},
  rawListItemTheme,
  partialListItemTheme,
);
