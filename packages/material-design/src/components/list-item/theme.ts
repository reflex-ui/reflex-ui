/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ListItemProps,
  ListItemTheme,
  OptionalListItemTheme,
  rawListItemTheme,
  ViewStyleGetter,
} from '@reflex-ui/core';
import merge from 'lodash/merge';

export const getListItemContainerStyle: ViewStyleGetter<
  ListItemProps
> = () => ({
  alignItems: 'center',
  backgroundColor: 'transparent',
  flexDirection: 'row',
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
