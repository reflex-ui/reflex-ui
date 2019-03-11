/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// tslint:disable-next-line:max-line-length
import { getRawInjectableTextSubTheme } from '../raw/getRawInjectableTextSubTheme';
import { RfxTextProps } from './RfxTextProps';
import { RfxTextVariantsTheme } from './RfxTextVariantsTheme';

export const rawInjectableRfxTextSubTheme = getRawInjectableTextSubTheme<
  RfxTextProps
>();

export const rawRfxTextVariantsTheme: RfxTextVariantsTheme = {
  appBarTitle: rawInjectableRfxTextSubTheme,
  caption: rawInjectableRfxTextSubTheme,
  headline1: rawInjectableRfxTextSubTheme,
  headline2: rawInjectableRfxTextSubTheme,
  headline3: rawInjectableRfxTextSubTheme,
  headline4: rawInjectableRfxTextSubTheme,
  headline5: rawInjectableRfxTextSubTheme,
  headline6: rawInjectableRfxTextSubTheme,
  overline: rawInjectableRfxTextSubTheme,
  paragraph1: rawInjectableRfxTextSubTheme,
  paragraph2: rawInjectableRfxTextSubTheme,
  subtitle1: rawInjectableRfxTextSubTheme,
  subtitle2: rawInjectableRfxTextSubTheme,
};
