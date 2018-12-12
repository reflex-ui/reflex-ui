/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// tslint:disable-next-line:max-line-length
import { getRawInjectableViewSubTheme } from '../raw/getRawInjectableViewSubTheme';
import { AppBarProps, AppBarTheme, AppBarVariantsTheme } from './';

export const rawInjectableAppBarViewSubTheme = getRawInjectableViewSubTheme<
  AppBarProps
>();

export const rawAppBarVariantTheme: AppBarTheme = {
  centerArea: rawInjectableAppBarViewSubTheme,
  container: rawInjectableAppBarViewSubTheme,
  leadingArea: rawInjectableAppBarViewSubTheme,
  trailingArea: rawInjectableAppBarViewSubTheme,
};

export const rawAppBarTheme: AppBarVariantsTheme = {
  default: rawAppBarVariantTheme,
  dense: rawAppBarVariantTheme,
  prominent: rawAppBarVariantTheme,
  prominentDense: rawAppBarVariantTheme,
};
