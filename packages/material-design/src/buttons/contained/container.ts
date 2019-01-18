/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ButtonProps,
  getThemedColor,
  InjectableSubTheme,
  // InteractionType,
  rawInjectableButtonViewSubTheme,
  Size,
  ViewStyleGetter,
} from '@reflex-ui/core';
import merge from 'lodash/merge';
import { ViewProps, ViewStyle } from 'react-native';

import {
  getAllVariantsButtonContainerProps,
  getAllVariantsButtonContainerStyle,
} from '../all-variants/container';

export const containedButtonContainerSizedStyle: {
  [key in Size]: ViewStyle
} = {
  none: {},
  xxsmall: {},
  /*
   * Sorting values by size here makes it easier to reason about
   * the overall scale of values than sorting alphabetically,
   * so let's just disable this rule here.
   */
  // tslint:disable-next-line:object-literal-sort-keys
  xsmall: {
    height: 28,
    minWidth: 54,
    paddingHorizontal: 8,
  },
  small: {
    height: 32,
    minWidth: 64,
    paddingHorizontal: 16,
  },
  medium: {
    height: 36,
    minWidth: 64,
    paddingHorizontal: 16,
  },
  large: {
    height: 40,
    minWidth: 72,
    paddingHorizontal: 20,
  },
  xlarge: {
    height: 48,
    minWidth: 82,
    paddingHorizontal: 28,
  },
  xxlarge: {},
};

export const getContainedButtonContainerStyle: ViewStyleGetter<
  ButtonProps
> = props => ({
  ...getAllVariantsButtonContainerStyle(props),
  ...containedButtonContainerSizedStyle[props.size],
  backgroundColor: getThemedColor(props),
});

export const containedButtonContainerTheme: InjectableSubTheme<
  ButtonProps,
  ViewProps,
  ViewStyle
> = merge({}, rawInjectableButtonViewSubTheme, {
  getProps: getAllVariantsButtonContainerProps,
  getStyle: getContainedButtonContainerStyle,
});
