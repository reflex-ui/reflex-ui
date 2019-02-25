/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ButtonProps,
  InjectableSubTheme,
  rawInjectableButtonViewSubTheme,
  Size,
  ViewStyleGetter,
} from '@reflex-ui/core';
import merge from 'lodash/merge';
import { ViewProps, ViewStyle } from 'react-native';

import { getOutlinedButtonContainerStyle } from '../outlined/container';

export const outlinedShapedButtonContainerSizedStyle: {
  [key in Size]: ViewStyle
} = {
  xxsmall: { borderRadius: 12 },
  /*
   * Sorting values by size here makes it easier to reason about
   * the overall scale of values than sorting alphabetically,
   * so let's just disable this rule here.
   */
  // tslint:disable-next-line:object-literal-sort-keys
  xsmall: { borderRadius: 14 },
  small: { borderRadius: 16 },
  medium: { borderRadius: 18 },
  large: { borderRadius: 20 },
  xlarge: { borderRadius: 24 },
  xxlarge: { borderRadius: 32 },
};

export const getOutlinedShapedButtonContainerStyle: ViewStyleGetter<
  ButtonProps
> = props => ({
  ...getOutlinedButtonContainerStyle(props),
  ...outlinedShapedButtonContainerSizedStyle[props.size],
});

export const outlinedShapedButtonContainerTheme: InjectableSubTheme<
  ButtonProps,
  ViewProps,
  ViewStyle
> = merge({}, rawInjectableButtonViewSubTheme, {
  getStyle: getOutlinedShapedButtonContainerStyle,
});
