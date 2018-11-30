/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { FontWeight, getFontWeight, TypographyTheme } from '@reflex-ui/core';
import { getFontFamily } from './';

export const typographyTheme: TypographyTheme = {
  caption: {
    fontFamily: getFontFamily(),
    fontSize: 12,
    fontWeight: getFontWeight(FontWeight.REGULAR),
    letterSpacing: 0.4,
  },
  headline1: {
    fontFamily: getFontFamily(),
    fontSize: 96,
    fontWeight: getFontWeight(FontWeight.LIGHT),
    letterSpacing: -1.5,
  },
  headline2: {
    fontFamily: getFontFamily(),
    fontSize: 60,
    fontWeight: getFontWeight(FontWeight.LIGHT),
    letterSpacing: -0.5,
  },
  headline3: {
    fontFamily: getFontFamily(),
    fontSize: 48,
    fontWeight: getFontWeight(FontWeight.REGULAR),
    letterSpacing: 0,
  },
  headline4: {
    fontFamily: getFontFamily(),
    fontSize: 34,
    fontWeight: getFontWeight(FontWeight.REGULAR),
    letterSpacing: 0.25,
  },
  headline5: {
    fontFamily: getFontFamily(),
    fontSize: 24,
    fontWeight: getFontWeight(FontWeight.REGULAR),
    letterSpacing: 0,
  },
  headline6: {
    fontFamily: getFontFamily(),
    fontSize: 20,
    fontWeight: getFontWeight(FontWeight.MEDIUM),
    letterSpacing: 0.15,
  },
  overline: {
    fontFamily: getFontFamily(),
    fontSize: 10,
    fontWeight: getFontWeight(FontWeight.REGULAR),
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  paragraph1: {
    fontFamily: getFontFamily(),
    fontSize: 16,
    fontWeight: getFontWeight(FontWeight.REGULAR),
    letterSpacing: 0.5,
  },
  paragraph2: {
    fontFamily: getFontFamily(),
    fontSize: 14,
    fontWeight: getFontWeight(FontWeight.REGULAR),
    letterSpacing: 0.25,
  },
  subtitle1: {
    fontFamily: getFontFamily(),
    fontSize: 16,
    fontWeight: getFontWeight(FontWeight.REGULAR),
    letterSpacing: 0.15,
  },
  subtitle2: {
    fontFamily: getFontFamily(),
    fontSize: 14,
    fontWeight: getFontWeight(FontWeight.MEDIUM),
    letterSpacing: 0.1,
  },
};
