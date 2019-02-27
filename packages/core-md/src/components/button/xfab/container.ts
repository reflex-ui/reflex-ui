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
  SizedData,
  ViewStyleGetter,
} from '@reflex-ui/core';
import merge from 'lodash/merge';
import { ViewProps, ViewStyle } from 'react-native';

import { getAllVariantsButtonContainerProps } from '../all-variants/container';
import { getFabButtonContainerStyle } from '../fab/container';

export const xfabButtonContainerSizedStyle: SizedData<ViewStyle> = {
  xxsmall: {
    borderRadius: 12,
    height: 24,
    minWidth: 40,
    paddingHorizontal: 10,
  },
  /*
   * Sorting values by size here makes it easier to reason about
   * the overall scale of values than sorting alphabetically,
   * so let's just disable this rule here.
   */
  // tslint:disable-next-line:object-literal-sort-keys
  xsmall: {
    borderRadius: 16,
    height: 32,
    minWidth: 48,
    paddingHorizontal: 14,
  },
  small: {
    borderRadius: 20,
    height: 40,
    minWidth: 56,
    paddingHorizontal: 18,
  },
  medium: {
    borderRadius: 24,
    height: 48,
    minWidth: 56,
    paddingHorizontal: 20,
  },
  large: {
    borderRadius: 28,
    height: 56,
    minWidth: 64,
    paddingHorizontal: 24,
  },
  xlarge: {
    borderRadius: 32,
    height: 64,
    minWidth: 72,
    paddingHorizontal: 28,
  },
  xxlarge: {
    borderRadius: 40,
    height: 80,
    minWidth: 88,
    paddingHorizontal: 36,
  },
};

export const getXFabButtonContainerStyle: ViewStyleGetter<
  ButtonProps
> = props => ({
  ...getFabButtonContainerStyle(props),
  ...xfabButtonContainerSizedStyle[props.size],
});

export const xfabButtonContainerTheme: InjectableSubTheme<
  ButtonProps,
  ViewProps,
  ViewStyle
> = merge({}, rawInjectableButtonViewSubTheme, {
  getProps: getAllVariantsButtonContainerProps,
  getStyle: getXFabButtonContainerStyle,
});
