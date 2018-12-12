/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// tslint:disable-next-line:max-line-length
import { getRawInjectableTextSubTheme } from '../raw/getRawInjectableTextSubTheme';
import { TypographyProps } from './TypographyProps';
import { TypographyTheme } from './TypographyTheme';

export const rawInjectableTypographyTextSubTheme = getRawInjectableTextSubTheme<
  TypographyProps
>();

export const rawTypographyTheme: TypographyTheme = {
  appBarTitle: rawInjectableTypographyTextSubTheme,
  caption: rawInjectableTypographyTextSubTheme,
  headline1: rawInjectableTypographyTextSubTheme,
  headline2: rawInjectableTypographyTextSubTheme,
  headline3: rawInjectableTypographyTextSubTheme,
  headline4: rawInjectableTypographyTextSubTheme,
  headline5: rawInjectableTypographyTextSubTheme,
  headline6: rawInjectableTypographyTextSubTheme,
  overline: rawInjectableTypographyTextSubTheme,
  paragraph1: rawInjectableTypographyTextSubTheme,
  paragraph2: rawInjectableTypographyTextSubTheme,
  subtitle1: rawInjectableTypographyTextSubTheme,
  subtitle2: rawInjectableTypographyTextSubTheme,
};
