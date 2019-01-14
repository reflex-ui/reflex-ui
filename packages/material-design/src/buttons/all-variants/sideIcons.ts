/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ButtonProps,
  OptionalSubTheme,
  Size,
  TextStyleGetter,
} from '@reflex-ui/core';
import { Platform, TextProps, TextStyle } from 'react-native';

import { getAllVariantsButtonIconStyle } from './icon';

export const allVariantsButtonLeadingIconSizedStyle: {
  [key in Size]: TextStyle
} = {
  large: { fontSize: 19 },
  medium: { fontSize: 18 },
  none: {},
  small: { fontSize: 17 },
  xlarge: { fontSize: 20 },
  xsmall: { fontSize: 15 },
};

export const getAllVariantsButtonLeadingIconStyle: TextStyleGetter<
  ButtonProps
> = props => ({
  ...getAllVariantsButtonIconStyle(props),
  ...allVariantsButtonLeadingIconSizedStyle[props.size],
  ...Platform.select<TextStyle>({
    web: {
      userSelect: 'none',
    },
  }),
});

// prettier-ignore
export const getAllVariantsButtonTrailingIconStyle =
  getAllVariantsButtonLeadingIconStyle;

export const allVariantsButtonLeadingIconTheme: OptionalSubTheme<
  ButtonProps,
  TextProps,
  TextStyle
> = {
  getStyle: getAllVariantsButtonLeadingIconStyle,
};

export const allVariantsButtonTrailingIconTheme: OptionalSubTheme<
  ButtonProps,
  TextProps,
  TextStyle
> = allVariantsButtonLeadingIconTheme;
