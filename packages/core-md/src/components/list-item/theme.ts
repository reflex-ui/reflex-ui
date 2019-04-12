/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  RfxViewPropsBase,
  RfxViewTheme,
  SizedData,
  ViewStyleGetter,
} from '@reflex-ui/core';
import { ViewStyle } from 'react-native';

import { getCommonRfxViewContainerStyle } from '../view/theme';

export const listItemContainerSizedStyle: SizedData<ViewStyle> = {
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

export const getListItemContainerStyle: ViewStyleGetter<
  RfxViewPropsBase
> = props => ({
  ...getCommonRfxViewContainerStyle(props),
  ...(props.size && listItemContainerSizedStyle[props.size]),
  alignItems: 'center',
  flexDirection: 'row',
  flexWrap: 'wrap',
  paddingHorizontal: 8,
});

export const listItemTheme: RfxViewTheme = {
  getStyle: getListItemContainerStyle,
};
