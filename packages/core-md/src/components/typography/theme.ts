/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  FontWeight,
  getFontWeight,
  getSizedMarginStyle,
  getSizedPaddingStyle,
  getThemedColor,
  isWeb,
  PaletteThemeProps,
  rawTypographyTheme,
  TextStyleGetter,
  TypographyProps,
  TypographyTheme,
  TypographyThemeOptional,
} from '@reflex-ui/core';
import merge from 'lodash/merge';
import { Platform, TextStyle } from 'react-native';

import { sizedSpacing } from '../../spacing/sizedSpacing';
import { getFontFamily } from './getFontFamily';

export const getDefaultTypographyColorStyle: TextStyleGetter<
  PaletteThemeProps
> = ({ colorTheme, invertColor, paletteTheme }) => ({
  color: getThemedColor({
    colorTheme,
    contained: false,
    invertColor,
    onColor: true,
    paletteTheme,
  }),
});

export const getCommonTypographyStyle: TextStyleGetter<
  TypographyProps
> = props => ({
  ...getSizedMarginStyle(sizedSpacing)(props),
  ...getSizedPaddingStyle(sizedSpacing)(props),
  ...getDefaultTypographyColorStyle(props),
  fontFamily: getFontFamily(),
  fontWeight: getFontWeight(FontWeight.Regular),
  ...Platform.select({
    web: {
      MozOsxFontSmoothing: 'grayscale',
      WebkitFontSmoothing: 'antialiased',
    },
  }),
});

export const partialTypographyTheme: TypographyThemeOptional = {
  appBarTitle: {
    getStyle: (props): TextStyle => ({
      ...getCommonTypographyStyle(props),
      fontSize: 20,
      fontWeight: getFontWeight(FontWeight.Medium),
      letterSpacing: 0.0075,
      marginTop: isWeb ? -1 : 0,
      overflow: 'hidden',
    }),
  },
  caption: {
    getStyle: props => ({
      ...getCommonTypographyStyle(props),
      fontSize: 12,
      letterSpacing: 0.033,
    }),
  },
  headline1: {
    getStyle: props => ({
      ...getCommonTypographyStyle(props),
      fontSize: 96,
      fontWeight: getFontWeight(FontWeight.Light),
      letterSpacing: -0.015625,
    }),
  },
  headline2: {
    getStyle: props => ({
      ...getCommonTypographyStyle(props),
      fontSize: 60,
      fontWeight: getFontWeight(FontWeight.Light),
      letterSpacing: -0.0083,
    }),
  },
  headline3: {
    getStyle: props => ({
      ...getCommonTypographyStyle(props),
      fontSize: 48,
      letterSpacing: 0,
    }),
  },
  headline4: {
    getStyle: props => ({
      ...getCommonTypographyStyle(props),
      fontSize: 34,
      letterSpacing: 0.0073,
    }),
  },
  headline5: {
    getStyle: props => ({
      ...getCommonTypographyStyle(props),
      fontSize: 24,
      letterSpacing: 0,
    }),
  },
  headline6: {
    getStyle: props => ({
      ...getCommonTypographyStyle(props),
      fontSize: 20,
      fontWeight: getFontWeight(FontWeight.Medium),
      letterSpacing: 0.0075,
    }),
  },
  overline: {
    getStyle: props => ({
      ...getCommonTypographyStyle(props),
      fontSize: 10,
      letterSpacing: 0.15,
      textTransform: 'uppercase',
    }),
  },
  paragraph1: {
    getStyle: props => ({
      ...getCommonTypographyStyle(props),
      fontSize: 16,
      letterSpacing: 0.03125,
    }),
  },
  paragraph2: {
    getStyle: props => ({
      ...getCommonTypographyStyle(props),
      fontSize: 14,
      letterSpacing: 0.01785,
    }),
  },
  subtitle1: {
    getStyle: props => ({
      ...getCommonTypographyStyle(props),
      fontSize: 16,
      letterSpacing: 0.009375,
    }),
  },
  subtitle2: {
    getStyle: props => ({
      ...getCommonTypographyStyle(props),
      fontSize: 14,
      fontWeight: getFontWeight(FontWeight.Medium),
      letterSpacing: 0.0071,
    }),
  },
};

export const typographyTheme: TypographyTheme = merge(
  {},
  rawTypographyTheme,
  partialTypographyTheme,
);
