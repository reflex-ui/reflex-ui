/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ButtonProps,
  InjectableSubTheme,
  rawInjectableButtonTextSubTheme,
  Size,
  TextStyleGetter,
} from '@reflex-ui/core';
import merge from 'lodash/merge';
import { TextProps, TextStyle } from 'react-native';

import { getContainedButtonLeadingIconStyle } from '../contained/sideIcons';

export const xfabButtonLeadingIconSizedStyle: { [key in Size]: TextStyle } = {
  large: { fontSize: 28 },
  medium: { fontSize: 24 },
  none: {},
  small: { fontSize: 22 },
  xlarge: { fontSize: 32 },
  xsmall: { fontSize: 18 },
};

export const getXFabButtonLeadingIconStyle: TextStyleGetter<
  ButtonProps
> = props => ({
  ...getContainedButtonLeadingIconStyle(props),
  ...xfabButtonLeadingIconSizedStyle[props.size],
});

export const xfabButtonLeadingIconTheme: InjectableSubTheme<
  ButtonProps,
  TextProps,
  TextStyle
> = merge({}, rawInjectableButtonTextSubTheme, {
  getStyle: getXFabButtonLeadingIconStyle,
});

export const xfabButtonTrailingIconTheme: InjectableSubTheme<
  ButtonProps,
  TextProps,
  TextStyle
> = xfabButtonLeadingIconTheme;
