/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ButtonProps,
  FontWeight,
  getFontWeight,
  isWeb,
  OptionalInjectableSubTheme,
  Size,
  TextStyleGetter,
} from '@reflex-ui/core';
import { Platform, TextProps, TextStyle } from 'react-native';

import { getFontFamily } from '../../typography';

export const allVariantsButtonTextSizedStyle: { [key in Size]: TextStyle } = {
  large: {
    fontSize: 15,
    letterSpacing: 1,
  },
  medium: {
    fontSize: 14,
    letterSpacing: 0.75,
  },
  none: {},
  small: {
    fontSize: 13,
    letterSpacing: 0.5,
  },
  xlarge: {
    fontSize: 16,
    letterSpacing: 1.25,
  },
  xsmall: {
    fontSize: 12,
    letterSpacing: 0.25,
  },
};

export const getAllVariantsButtonTextStyle: TextStyleGetter<ButtonProps> = ({
  size,
}) => ({
  ...allVariantsButtonTextSizedStyle[size],
  fontFamily: getFontFamily(),
  fontWeight: getFontWeight(FontWeight.MEDIUM),
  position: 'relative',
  textTransform: 'uppercase',
  ...Platform.select({
    web: {
      MozOsxFontSmoothing: 'grayscale',
      WebkitFontSmoothing: 'antialiased',
      marginTop: isWeb ? -2 : 0,
      userSelect: 'none',
    },
  }),
});

export const allVariantsButtonTextTheme: OptionalInjectableSubTheme<
  ButtonProps,
  TextProps,
  TextStyle
> = {
  getStyle: getAllVariantsButtonTextStyle,
};
