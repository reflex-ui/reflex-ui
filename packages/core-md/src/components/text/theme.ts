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
  getThemedOnColor,
  isWeb,
  RfxTextProps,
  RfxTextVariantsTheme,
  TextStyleGetter,
} from '@reflex-ui/core';
import { Platform, TextStyle } from 'react-native';

import { sizedSpacing } from '../../spacing/sizedSpacing';
import { getFontFamily } from './getFontFamily';

export const getCommonRfxTextStyle: TextStyleGetter<RfxTextProps> = props => ({
  ...getSizedMarginStyle(sizedSpacing)(props),
  ...getSizedPaddingStyle(sizedSpacing)(props),
  color: getThemedOnColor(props),
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
    text: {
      getStyle: (props): TextStyle => ({
        ...getCommonRfxTextStyle(props),
        fontSize: 20,
        fontWeight: getFontWeight(FontWeight.Medium),
        letterSpacing: 0.0075,
        marginTop: isWeb ? -1 : 0,
        overflow: 'hidden',
      }),
    },
  },
  caption: {
    text: {
      getStyle: props => ({
        ...getCommonRfxTextStyle(props),
        fontSize: 12,
        letterSpacing: 0.033,
      }),
    },
  },
  headline1: {
    text: {
      getStyle: props => ({
        ...getCommonRfxTextStyle(props),
        fontSize: 96,
        fontWeight: getFontWeight(FontWeight.Light),
        letterSpacing: -0.015625,
      }),
    },
  },
  headline2: {
    text: {
      getStyle: props => ({
        ...getCommonRfxTextStyle(props),
        fontSize: 60,
        fontWeight: getFontWeight(FontWeight.Light),
        letterSpacing: -0.0083,
      }),
    },
  },
  headline3: {
    text: {
      getStyle: props => ({
        ...getCommonRfxTextStyle(props),
        fontSize: 48,
        letterSpacing: 0,
      }),
    },
  },
  headline4: {
    text: {
      getStyle: props => ({
        ...getCommonRfxTextStyle(props),
        fontSize: 34,
        letterSpacing: 0.0073,
      }),
    },
  },
  headline5: {
    text: {
      getStyle: props => ({
        ...getCommonRfxTextStyle(props),
        fontSize: 24,
        letterSpacing: 0,
      }),
    },
  },
  headline6: {
    text: {
      getStyle: props => ({
        ...getCommonRfxTextStyle(props),
        fontSize: 20,
        fontWeight: getFontWeight(FontWeight.Medium),
        letterSpacing: 0.0075,
      }),
    },
  },
  overline: {
    text: {
      getStyle: props => ({
        ...getCommonRfxTextStyle(props),
        fontSize: 10,
        letterSpacing: 0.15,
        textTransform: 'uppercase',
      }),
    },
  },
  paragraph1: {
    text: {
      getStyle: props => ({
        ...getCommonRfxTextStyle(props),
        fontSize: 16,
        letterSpacing: 0.03125,
      }),
    },
  },
  paragraph2: {
    text: {
      getStyle: props => ({
        ...getCommonRfxTextStyle(props),
        fontSize: 14,
        letterSpacing: 0.01785,
      }),
    },
  },
  subtitle1: {
    text: {
      getStyle: props => ({
        ...getCommonRfxTextStyle(props),
        fontSize: 16,
        letterSpacing: 0.009375,
      }),
    },
  },
  subtitle2: {
    text: {
      getStyle: props => ({
        ...getCommonRfxTextStyle(props),
        fontSize: 14,
        fontWeight: getFontWeight(FontWeight.Medium),
        letterSpacing: 0.0071,
      }),
    },
  },
};
