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

export const defaultButtonContainerSizedStyle: { [key in Size]: ViewStyle } = {
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
    paddingHorizontal: 4,
  },
  small: {
    height: 32,
    minWidth: 64,
    paddingHorizontal: 8,
  },
  medium: {
    height: 36,
    minWidth: 64,
    paddingHorizontal: 8,
  },
  large: {
    height: 40,
    minWidth: 64,
    paddingHorizontal: 8,
  },
  xlarge: {
    height: 48,
    minWidth: 70,
    paddingHorizontal: 12,
  },
  xxlarge: {},
};

export const getDefaultButtonContainerStyle: ViewStyleGetter<
  ButtonProps
> = props => ({
  ...getAllVariantsButtonContainerStyle(props),
  ...defaultButtonContainerSizedStyle[props.size],
  backgroundColor: getThemedColor({
    colorTheme: props.colorTheme,
    contained: false,
    interactionState: props.interactionState,
    invertColor: props.invertColor,
    paletteTheme: props.paletteTheme,
  }),
});

export const defaultButtonContainerTheme: InjectableSubTheme<
  ButtonProps,
  ViewProps,
  ViewStyle
> = merge({}, rawInjectableButtonViewSubTheme, {
  getProps: getAllVariantsButtonContainerProps,
  getStyle: getDefaultButtonContainerStyle,
});
