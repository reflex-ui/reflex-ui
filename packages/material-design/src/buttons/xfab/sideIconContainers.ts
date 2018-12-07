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

export const xfabButtonLeadingIconContainerSizedStyle: {
  [key in Size]: ViewStyle
} = {
  large: { marginEnd: 14, marginStart: -10 },
  medium: { marginEnd: 12, marginStart: -8 },
  none: {},
  small: { marginEnd: 10, marginStart: -6 },
  xlarge: { marginEnd: 18, marginStart: -12 },
  xsmall: { marginEnd: 8, marginStart: -4 },
};

export const getXFabButtonLeadingIconContainerStyle: ViewStyleGetter<
  ButtonProps
> = props => ({
  ...xfabButtonLeadingIconContainerSizedStyle[props.size],
});

export const xfabButtonLeadingIconContainerTheme: InjectableSubTheme<
  ButtonProps,
  ViewProps,
  ViewStyle
> = merge({}, rawInjectableButtonViewSubTheme, {
  getStyle: getXFabButtonLeadingIconContainerStyle,
});

export const xfabButtonTrailingIconContainerSizedStyle: {
  [key in Size]: ViewStyle
} = {
  large: { marginEnd: -10, marginStart: 14 },
  medium: { marginEnd: -8, marginStart: 12 },
  none: {},
  small: { marginEnd: -6, marginStart: 10 },
  xlarge: { marginEnd: -12, marginStart: 18 },
  xsmall: { marginEnd: -4, marginStart: 8 },
};

export const getXFabButtonTrailingIconContainerStyle: ViewStyleGetter<
  ButtonProps
> = props => ({
  ...xfabButtonTrailingIconContainerSizedStyle[props.size],
});

export const xfabButtonTrailingIconContainerTheme: InjectableSubTheme<
  ButtonProps,
  ViewProps,
  ViewStyle
> = merge({}, rawInjectableButtonViewSubTheme, {
  getStyle: getXFabButtonTrailingIconContainerStyle,
});
