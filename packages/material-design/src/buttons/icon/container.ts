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

import { getDefaultButtonContainerStyle } from '../default/container';

export const iconButtonContainerSizedStyle: { [key in Size]: ViewStyle } = {
  none: {},
  xxsmall: {},
  /*
   * Sorting values by size here makes it easier to reason about
   * the overall scale of values than sorting alphabetically,
   * so let's just disable this rule here.
   */
  // tslint:disable-next-line:object-literal-sort-keys
  xsmall: {
    borderRadius: 16,
    height: 32,
    minWidth: 32,
  },
  small: {
    borderRadius: 20,
    height: 40,
    minWidth: 40,
  },
  medium: {
    borderRadius: 24,
    height: 48,
    minWidth: 48,
  },
  large: {
    borderRadius: 28,
    height: 56,
    minWidth: 56,
  },
  xlarge: {
    borderRadius: 40,
    height: 80,
    minWidth: 80,
  },
  xxlarge: {},
};

export const getIconButtonContainerStyle: ViewStyleGetter<
  ButtonProps
> = props => ({
  ...getDefaultButtonContainerStyle(props),
  ...iconButtonContainerSizedStyle[props.size],
});

export const iconButtonContainerTheme: InjectableSubTheme<
  ButtonProps,
  ViewProps,
  ViewStyle
> = merge({}, rawInjectableButtonViewSubTheme, {
  getStyle: getIconButtonContainerStyle,
});
