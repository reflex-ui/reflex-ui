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
  Size,
  ViewStyleGetter,
} from '@reflex-ui/core';
import merge from 'lodash/merge';
import { ViewStyle } from 'react-native';

export const listItemContainerSizedStyle: { [key in Size]: ViewStyle } = {
  xxsmall: { minHeight: 32 },
  /*
   * Sorting values by size here makes it easier to reason about
   * the overall scale of values than sorting alphabetically,
   * so let's just disable this rule here.
   */
  // tslint:disable-next-line:object-literal-sort-keys
  xsmall: { minHeight: 40 },
  small: { minHeight: 48 },
  medium: { minHeight: 56 },
  large: { minHeight: 64 },
  xlarge: { minHeight: 72 },
  xxlarge: { minHeight: 88 },
};

export const getListItemContainerStyle: ViewStyleGetter<ListItemProps> = ({
  size,
}) => ({
  ...listItemContainerSizedStyle[size],
  alignItems: 'center',
  backgroundColor: 'transparent',
  flexDirection: 'row',
  paddingHorizontal: 8,
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
