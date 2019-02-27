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
import { getDefaultButtonContainerStyle } from '../default/container';
import { getDefaultButtonTextStyle } from '../default/text';

export const outlinedButtonContainerSizedStyle: SizedData<ViewStyle> = {
  xxsmall: {
    borderWidth: 1,
    paddingHorizontal: 4,
  },
  /*
   * Sorting values by size here makes it easier to reason about
   * the overall scale of values than sorting alphabetically,
   * so let's just disable this rule here.
   */
  // tslint:disable-next-line:object-literal-sort-keys
  xsmall: {
    borderWidth: 1,
    paddingHorizontal: 6,
  },
  small: {
    borderWidth: 2,
    paddingHorizontal: 14,
  },
  medium: {
    borderWidth: 2,
    paddingHorizontal: 14,
  },
  large: {
    borderWidth: 2,
    paddingHorizontal: 20,
  },
  xlarge: {
    borderWidth: 3,
    paddingHorizontal: 24,
  },
  xxlarge: {
    borderWidth: 3,
    paddingHorizontal: 32,
  },
};

export const getOutlinedButtonContainerStyle: ViewStyleGetter<
  ButtonProps
> = props => ({
  ...getDefaultButtonContainerStyle(props),
  ...outlinedButtonContainerSizedStyle[props.size],
  borderColor: getDefaultButtonTextStyle(props).color,
});

export const outlinedButtonContainerTheme: InjectableSubTheme<
  ButtonProps,
  ViewProps,
  ViewStyle
> = merge({}, rawInjectableButtonViewSubTheme, {
  getProps: getAllVariantsButtonContainerProps,
  getStyle: getOutlinedButtonContainerStyle,
});
