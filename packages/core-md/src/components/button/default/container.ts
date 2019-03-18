/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  BuiltInViewTheme,
  ButtonProps,
  SizedData,
  ViewStyleGetter,
} from '@reflex-ui/core';
import { ViewStyle } from 'react-native';

import {
  getAllVariantsButtonContainerProps,
  getAllVariantsButtonContainerStyle,
} from '../all-variants/container';

export const defaultButtonContainerSizedStyle: SizedData<ViewStyle> = {
  xxsmall: {
    height: 24,
    minWidth: 40,
    paddingHorizontal: 4,
  },
  /*
   * Sorting values by size here makes it easier to reason about
   * the overall scale of values than sorting alphabetically,
   * so let's just disable this rule here.
   */
  // tslint:disable-next-line:object-literal-sort-keys
  xsmall: {
    height: 28,
    minWidth: 52,
    paddingHorizontal: 4,
  },
  small: {
    height: 32,
    minWidth: 56,
    paddingHorizontal: 8,
  },
  medium: {
    height: 36,
    minWidth: 64,
    paddingHorizontal: 8,
  },
  large: {
    height: 40,
    minWidth: 72,
    paddingHorizontal: 8,
  },
  xlarge: {
    height: 48,
    minWidth: 80,
    paddingHorizontal: 12,
  },
  xxlarge: {
    height: 64,
    minWidth: 96,
    paddingHorizontal: 16,
  },
};

export const getDefaultButtonContainerStyle: ViewStyleGetter<
  ButtonProps
> = props => ({
  ...getAllVariantsButtonContainerStyle(props),
  ...defaultButtonContainerSizedStyle[props.size],
});

export const defaultButtonContainerTheme: BuiltInViewTheme<ButtonProps> = {
  getProps: getAllVariantsButtonContainerProps,
  getStyle: getDefaultButtonContainerStyle,
};
