/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  BuiltInSimpleComponentTheme,
  FontWeight,
  getFontWeight,
  getOnColor,
  getSizedMarginStyle,
  getSizedPaddingStyle,
  isWeb,
  RfxTextPropsBase,
  RfxTextVariantsTheme,
} from '@reflex-ui/core';
import { Platform, TextProps, TextStyle } from 'react-native';

import { getFlexboxStyle } from '../../flexbox/getFlexboxStyle';
import { sizedSpacing } from '../../spacing/sizedSpacing';
import { getFontFamily } from './getFontFamily';

export const getCommonRfxTextStyle = <
  Props extends RfxTextPropsBase<Props, Theme>,
  Theme extends BuiltInSimpleComponentTheme<Props, TextProps, TextStyle>
>(
  props: Props,
): TextStyle => ({
  ...getFlexboxStyle(props),
  ...getSizedMarginStyle(sizedSpacing)(props),
  ...getSizedPaddingStyle(sizedSpacing)(props),
  color: getOnColor(props),
  fontFamily: getFontFamily(),
  fontWeight: getFontWeight(FontWeight.Regular),
  ...Platform.select({
    web: {
      MozOsxFontSmoothing: 'grayscale',
      WebkitFontSmoothing: 'antialiased',
    },
  }),
});

export const rfxTextVariantsTheme: RfxTextVariantsTheme = {
  appBarTitle: {
    getStyle: (props): TextStyle => ({
      ...getCommonRfxTextStyle(props),
      fontSize: 20,
      fontWeight: getFontWeight(FontWeight.Medium),
      letterSpacing: 0.0075,
      marginTop: isWeb ? -1 : 0,
      overflow: 'hidden',
    }),
  },
  caption: {
    getStyle: props => ({
      ...getCommonRfxTextStyle(props),
      fontSize: 12,
      letterSpacing: 0.033,
    }),
  },
  headline1: {
    getStyle: props => ({
      ...getCommonRfxTextStyle(props),
      fontSize: 96,
      fontWeight: getFontWeight(FontWeight.Light),
      letterSpacing: -0.015625,
    }),
  },
  headline2: {
    getStyle: props => ({
      ...getCommonRfxTextStyle(props),
      fontSize: 60,
      fontWeight: getFontWeight(FontWeight.Light),
      letterSpacing: -0.0083,
    }),
  },
  headline3: {
    getStyle: props => ({
      ...getCommonRfxTextStyle(props),
      fontSize: 48,
      letterSpacing: 0,
    }),
  },
  headline4: {
    getStyle: props => ({
      ...getCommonRfxTextStyle(props),
      fontSize: 34,
      letterSpacing: 0.0073,
    }),
  },
  headline5: {
    getStyle: props => ({
      ...getCommonRfxTextStyle(props),
      fontSize: 24,
      letterSpacing: 0,
    }),
  },
  headline6: {
    getStyle: props => ({
      ...getCommonRfxTextStyle(props),
      fontSize: 20,
      fontWeight: getFontWeight(FontWeight.Medium),
      letterSpacing: 0.0075,
    }),
  },
  overline: {
    getStyle: props => ({
      ...getCommonRfxTextStyle(props),
      fontSize: 10,
      letterSpacing: 0.15,
      textTransform: 'uppercase',
    }),
  },
  paragraph1: {
    getStyle: props => ({
      ...getCommonRfxTextStyle(props),
      fontSize: 16,
      letterSpacing: 0.03125,
    }),
  },
  paragraph2: {
    getStyle: props => ({
      ...getCommonRfxTextStyle(props),
      fontSize: 14,
      letterSpacing: 0.01785,
    }),
  },
  subtitle1: {
    getStyle: props => ({
      ...getCommonRfxTextStyle(props),
      fontSize: 16,
      letterSpacing: 0.009375,
    }),
  },
  subtitle2: {
    getStyle: props => ({
      ...getCommonRfxTextStyle(props),
      fontSize: 14,
      fontWeight: getFontWeight(FontWeight.Medium),
      letterSpacing: 0.0071,
    }),
  },
};
