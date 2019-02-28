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
  getThemedOnColor,
  InjectableSubThemeOptional,
  Size,
  SizedData,
  TextStyleGetter,
} from '@reflex-ui/core';
import { Platform, TextProps, TextStyle } from 'react-native';

import { getFontFamily } from '../../typography';

export const allVariantsButtonTextSizedStyle: SizedData<TextStyle> = {
  xxsmall: {
    fontSize: 11,
    letterSpacing: 0.0772,
  },
  /*
   * Sorting values by size here makes it easier to reason about
   * the overall scale of values than sorting alphabetically,
   * so let's just disable this rule here.
   */
  // tslint:disable-next-line:object-literal-sort-keys
  xsmall: {
    fontSize: 12,
    letterSpacing: 0.0833,
  },
  small: {
    fontSize: 13,
    letterSpacing: 0.08692,
  },
  medium: {
    fontSize: 14,
    letterSpacing: 0.0892,
  },
  large: {
    fontSize: 15,
    letterSpacing: 0.092,
  },
  xlarge: {
    fontSize: 16,
    letterSpacing: 0.09375,
  },
  xxlarge: {
    fontSize: 22,
    letterSpacing: 0.1125,
  },
};

export const getAllVariantsButtonTextStyle: TextStyleGetter<
  ButtonProps
> = props => ({
  ...allVariantsButtonTextSizedStyle[props.size],
  color: getThemedOnColor(props),
  fontFamily: getFontFamily(),
  fontWeight: getFontWeight(FontWeight.Medium),
  position: 'relative',
  // textTransform: 'uppercase',
  ...Platform.select({
    web: {
      MozOsxFontSmoothing: 'grayscale',
      WebkitFontSmoothing: 'antialiased',
      marginTop: props.size === Size.XXS || props.size === Size.XS ? -1 : -2,
      userSelect: 'none',
    },
  }),
});

export const allVariantsButtonTextTheme: InjectableSubThemeOptional<
  ButtonProps,
  TextProps,
  TextStyle
> = {
  getStyle: getAllVariantsButtonTextStyle,
};
