/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PaletteColor, PaletteColorOptional } from './PaletteColor';

export interface PaletteTheme {
  readonly background: PaletteColor;
  readonly error: PaletteColor;
  readonly primary: PaletteColor;
  readonly secondary: PaletteColor;
  readonly success: PaletteColor;
  readonly surface: PaletteColor;
  readonly warning: PaletteColor;
}

export type PaletteThemeOptional = {
  [P in keyof PaletteTheme]?: PaletteColorOptional
};
