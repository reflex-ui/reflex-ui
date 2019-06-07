/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ButtonProps,
  SizedData,
  ViewStyleGetter,
  ViewTheme,
} from '@reflex-ui/core';
import { ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';

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
  ...(props.size && xfabButtonLeadingIconContainerSizedStyle[props.size]),
});

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
  ...(props.size && xfabButtonTrailingIconContainerSizedStyle[props.size]),
});

export const xfabButtonLeadingIconSizedProps: SizedData<SvgProps> = {
  xxsmall: { height: 16, width: 16 },
  /*
   * Sorting values by size here makes it easier to reason about
   * the overall scale of values than sorting alphabetically,
   * so let's just disable this rule here.
   */
  // tslint:disable-next-line:object-literal-sort-keys
  xsmall: { height: 18, width: 18 },
  small: { height: 22, width: 22 },
  medium: { height: 24, width: 24 },
  large: { height: 28, width: 28 },
  xlarge: { height: 32, width: 32 },
  xxlarge: { height: 40, width: 40 },
};

export const xfabButtonLeadingIconContainerTheme: ViewTheme<ButtonProps> = {
  getStyle: getXFabButtonLeadingIconContainerStyle,
};

export const xfabButtonTrailingIconContainerTheme: ViewTheme<ButtonProps> = {
  getStyle: getXFabButtonTrailingIconContainerStyle,
};
