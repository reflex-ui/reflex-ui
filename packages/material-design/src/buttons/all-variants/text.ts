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
  none: {},
  xxsmall: {},
  /*
   * Sorting values by size here makes it easier to reason about
   * the overall scale of values than sorting alphabetically,
   * so let's just disable this rule here.
   */
  // tslint:disable-next-line:object-literal-sort-keys
  xsmall: {
    fontSize: 12,
    letterSpacing: 0.25,
  },
  small: {
    fontSize: 13,
    letterSpacing: 0.5,
  },
  medium: {
    fontSize: 14,
    letterSpacing: 0.75,
  },
  large: {
    fontSize: 15,
    letterSpacing: 1,
  },
  xlarge: {
    fontSize: 16,
    letterSpacing: 1.25,
  },
  xxlarge: {},
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
