/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ColorTheme } from './ColorTheme';

export const backgroundColorThemes: ColorTheme[] = [
  ColorTheme.BackgroundNormal,
  ColorTheme.BackgroundDark,
  ColorTheme.BackgroundLight,
];

export const errorColorThemes: ColorTheme[] = [
  ColorTheme.ErrorNormal,
  ColorTheme.ErrorDark,
  ColorTheme.ErrorLight,
];

export const primaryColorThemes: ColorTheme[] = [
  ColorTheme.PrimaryNormal,
  ColorTheme.PrimaryDark,
  ColorTheme.PrimaryLight,
];

export const secondaryColorThemes: ColorTheme[] = [
  ColorTheme.SecondaryNormal,
  ColorTheme.SecondaryDark,
  ColorTheme.SecondaryLight,
];

export const successColorThemes: ColorTheme[] = [
  ColorTheme.SuccessNormal,
  ColorTheme.SuccessDark,
  ColorTheme.SuccessLight,
];

export const surfaceColorThemes: ColorTheme[] = [
  ColorTheme.SurfaceNormal,
  ColorTheme.SurfaceDark,
  ColorTheme.SurfaceLight,
];

export const warningColorThemes: ColorTheme[] = [
  ColorTheme.WarningNormal,
  ColorTheme.WarningDark,
  ColorTheme.WarningLight,
];

export const allColorThemes: ColorTheme[] = [
  ...primaryColorThemes,
  ...secondaryColorThemes,
  ...surfaceColorThemes,
  ...backgroundColorThemes,
  ...errorColorThemes,
  ...successColorThemes,
  ...warningColorThemes,
];
