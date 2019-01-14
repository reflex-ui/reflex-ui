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

export const allVariantsButtonIconSizedStyle: { [key in Size]: TextStyle } = {
  large: { fontSize: 30 },
  medium: { fontSize: 24 },
  none: {},
  small: { fontSize: 20 },
  xlarge: { fontSize: 48 },
  xsmall: { fontSize: 18 },
};

export const getAllVariantsButtonIconStyle: TextStyleGetter<ButtonProps> = ({
  size,
}) => ({
  ...allVariantsButtonIconSizedStyle[size],
  ...Platform.select<TextStyle>({
    web: {
      userSelect: 'none',
    },
  }),
});

export const allVariantsButtonIconTheme: OptionalSubTheme<
  ButtonProps,
  TextProps,
  TextStyle
> = {
  getStyle: getAllVariantsButtonIconStyle,
};
