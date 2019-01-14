/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ColorTheme } from './ColorTheme';

export const backgroundColorThemes: ColorTheme[] = [
  ColorTheme.BACKGROUND_NORMAL,
  ColorTheme.BACKGROUND_DARK,
  ColorTheme.BACKGROUND_LIGHT,
];

export const errorColorThemes: ColorTheme[] = [
  ColorTheme.ERROR_NORMAL,
  ColorTheme.ERROR_DARK,
  ColorTheme.ERROR_LIGHT,
];

export const primaryColorThemes: ColorTheme[] = [
  ColorTheme.PRIMARY_NORMAL,
  ColorTheme.PRIMARY_DARK,
  ColorTheme.PRIMARY_LIGHT,
];

export const secondaryColorThemes: ColorTheme[] = [
  ColorTheme.SECONDARY_NORMAL,
  ColorTheme.SECONDARY_DARK,
  ColorTheme.SECONDARY_LIGHT,
];

export const successColorThemes: ColorTheme[] = [
  ColorTheme.SUCCESS_NORMAL,
  ColorTheme.SUCCESS_DARK,
  ColorTheme.SUCCESS_LIGHT,
];

export const surfaceColorThemes: ColorTheme[] = [
  ColorTheme.SURFACE_NORMAL,
  ColorTheme.SURFACE_DARK,
  ColorTheme.SURFACE_LIGHT,
];

export const warningColorThemes: ColorTheme[] = [
  ColorTheme.WARNING_NORMAL,
  ColorTheme.WARNING_DARK,
  ColorTheme.WARNING_LIGHT,
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
