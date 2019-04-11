/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PaletteColor, PaletteColorOptional } from './PaletteColor';

export interface Palette {
  readonly background: PaletteColor;
  readonly backgroundDark: PaletteColor;
  readonly backgroundLight: PaletteColor;
  readonly error: PaletteColor;
  readonly errorDark: PaletteColor;
  readonly errorLight: PaletteColor;
  readonly primary: PaletteColor;
  readonly primaryDark: PaletteColor;
  readonly primaryLight: PaletteColor;
  readonly secondary: PaletteColor;
  readonly secondaryDark: PaletteColor;
  readonly secondaryLight: PaletteColor;
  readonly success: PaletteColor;
  readonly successDark: PaletteColor;
  readonly successLight: PaletteColor;
  readonly surface: PaletteColor;
  readonly surfaceDark: PaletteColor;
  readonly surfaceLight: PaletteColor;
  readonly warning: PaletteColor;
  readonly warningDark: PaletteColor;
  readonly warningLight: PaletteColor;
}

export type PaletteOptional = { [P in keyof Palette]?: PaletteColorOptional };
