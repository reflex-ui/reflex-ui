/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ButtonProps,
  InjectableSubTheme,
  SizedData,
  ViewStyleGetter,
} from '@reflex-ui/core';
import { ViewProps, ViewStyle } from 'react-native';

export const xfabButtonLeadingIconContainerSizedStyle: SizedData<ViewStyle> = {
  xxsmall: { marginEnd: 6, marginStart: -2 },
  /*
   * Sorting values by size here makes it easier to reason about
   * the overall scale of values than sorting alphabetically,
   * so let's just disable this rule here.
   */
  // tslint:disable-next-line:object-literal-sort-keys
  xsmall: { marginEnd: 8, marginStart: -4 },
  small: { marginEnd: 10, marginStart: -6 },
  medium: { marginEnd: 12, marginStart: -8 },
  large: { marginEnd: 14, marginStart: -10 },
  xlarge: { marginEnd: 16, marginStart: -12 },
  xxlarge: { marginEnd: 18, marginStart: -14 },
};

export const getXFabButtonLeadingIconContainerStyle: ViewStyleGetter<
  ButtonProps
> = props => ({
  ...xfabButtonLeadingIconContainerSizedStyle[props.size],
});

export const xfabButtonLeadingIconContainerTheme: InjectableSubTheme<
  ButtonProps,
  ViewProps,
  ViewStyle
> = {
  getStyle: getXFabButtonLeadingIconContainerStyle,
};

export const xfabButtonTrailingIconContainerSizedStyle: SizedData<ViewStyle> = {
  xxsmall: { marginEnd: -2, marginStart: 6 },
  /*
   * Sorting values by size here makes it easier to reason about
   * the overall scale of values than sorting alphabetically,
   * so let's just disable this rule here.
   */
  // tslint:disable-next-line:object-literal-sort-keys
  xsmall: { marginEnd: -4, marginStart: 8 },
  small: { marginEnd: -6, marginStart: 10 },
  medium: { marginEnd: -8, marginStart: 12 },
  large: { marginEnd: -10, marginStart: 14 },
  xlarge: { marginEnd: -12, marginStart: 16 },
  xxlarge: { marginEnd: -14, marginStart: 18 },
};

export const getXFabButtonTrailingIconContainerStyle: ViewStyleGetter<
  ButtonProps
> = props => ({
  ...xfabButtonTrailingIconContainerSizedStyle[props.size],
});

export const xfabButtonTrailingIconContainerTheme: InjectableSubTheme<
  ButtonProps,
  ViewProps,
  ViewStyle
> = {
  getStyle: getXFabButtonTrailingIconContainerStyle,
};
