/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ButtonProps,
  OptionalInjectableSubTheme,
  Size,
  ViewStyleGetter,
} from '@reflex-ui/core';

import { TextStyle, ViewProps, ViewStyle } from 'react-native';

export const allVariantsButtonLeadingIconContainerSizedStyle: {
  [key in Size]: TextStyle
} = {
  xxsmall: {},
  /*
   * Sorting values by size here makes it easier to reason about
   * the overall scale of values than sorting alphabetically,
   * so let's just disable this rule here.
   */
  // tslint:disable-next-line:object-literal-sort-keys
  xsmall: {
    marginEnd: 6,
    marginStart: -2,
  },
  small: {
    marginEnd: 7,
    marginStart: -3,
  },
  medium: {
    marginEnd: 8,
    marginStart: -4,
  },
  large: {
    marginEnd: 10,
    marginStart: -6,
  },
  xlarge: {
    marginEnd: 12,
    marginStart: -8,
  },
  xxlarge: {},
};

export const getAllVariantsButtonLeadingIconContainerStyle: ViewStyleGetter<
  ButtonProps
> = props => allVariantsButtonLeadingIconContainerSizedStyle[props.size];

// tslint:disable-next-line:max-line-length
export const allVariantsButtonLeadingIconContainerTheme: OptionalInjectableSubTheme<
  ButtonProps,
  ViewProps,
  ViewStyle
> = {
  getStyle: getAllVariantsButtonLeadingIconContainerStyle,
};

export const allVariantsButtonTrailingIconContainerSizedStyle: {
  [key in Size]: TextStyle
} = {
  xxsmall: {},
  /*
   * Sorting values by size here makes it easier to reason about
   * the overall scale of values than sorting alphabetically,
   * so let's just disable this rule here.
   */
  // tslint:disable-next-line:object-literal-sort-keys
  xsmall: {
    marginEnd: -2,
    marginStart: 6,
  },
  small: {
    marginEnd: -3,
    marginStart: 7,
  },
  medium: {
    marginEnd: -4,
    marginStart: 8,
  },
  large: {
    marginEnd: -6,
    marginStart: 10,
  },
  xlarge: {
    marginEnd: -8,
    marginStart: 12,
  },
  xxlarge: {},
};

export const getAllVariantsButtonTrailingIconContainerStyle: ViewStyleGetter<
  ButtonProps
> = ({ size }) => allVariantsButtonTrailingIconContainerSizedStyle[size];

// tslint:disable-next-line:max-line-length
export const allVariantsButtonTrailingIconContainerTheme: OptionalInjectableSubTheme<
  ButtonProps,
  ViewProps,
  ViewStyle
> = {
  getStyle: getAllVariantsButtonTrailingIconContainerStyle,
};
