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
  large: {
    marginEnd: 10,
    marginStart: -6,
  },
  medium: {
    marginEnd: 8,
    marginStart: -4,
  },
  none: {},
  small: {
    marginEnd: 7,
    marginStart: -3,
  },
  xlarge: {
    marginEnd: 12,
    marginStart: -8,
  },
  xsmall: {
    marginEnd: 6,
    marginStart: -2,
  },
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
  large: {
    marginEnd: -6,
    marginStart: 10,
  },
  medium: {
    marginEnd: -4,
    marginStart: 8,
  },
  none: {},
  small: {
    marginEnd: -3,
    marginStart: 7,
  },
  xlarge: {
    marginEnd: -8,
    marginStart: 12,
  },
  xsmall: {
    marginEnd: -2,
    marginStart: 6,
  },
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
