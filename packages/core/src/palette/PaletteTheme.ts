/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  OptionalPaletteColorArrangement,
  PaletteColorArrangement,
} from './PaletteColorArrangement';

export interface PaletteTheme {
  readonly background: PaletteColorArrangement;
  readonly error: PaletteColorArrangement;
  readonly primary: PaletteColorArrangement;
  readonly secondary: PaletteColorArrangement;
  readonly success: PaletteColorArrangement;
  readonly surface: PaletteColorArrangement;
  readonly warning: PaletteColorArrangement;
}

export type OptionalPaletteTheme = {
  [P in keyof PaletteTheme]?: OptionalPaletteColorArrangement
};
