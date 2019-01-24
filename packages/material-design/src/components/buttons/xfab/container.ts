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

import { getFabButtonContainerStyle } from '../fab/container';

export const xfabButtonContainerSizedStyle: { [key in Size]: ViewStyle } = {
  xxsmall: {},
  /*
   * Sorting values by size here makes it easier to reason about
   * the overall scale of values than sorting alphabetically,
   * so let's just disable this rule here.
   */
  // tslint:disable-next-line:object-literal-sort-keys
  xsmall: {
    borderRadius: 15,
    height: 30,
    minWidth: 40,
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
    minWidth: 56,
    paddingHorizontal: 24,
  },
  xlarge: {
    borderRadius: 36,
    height: 72,
    minWidth: 70,
    paddingHorizontal: 32,
  },
  xxlarge: {},
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
  getStyle: getXFabButtonContainerStyle,
});
