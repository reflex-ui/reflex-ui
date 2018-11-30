/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PaletteColorVariant } from './PaletteColorVariant';

export interface PaletteColor {
  readonly dark: PaletteColorVariant;
  readonly light: PaletteColorVariant;
  readonly normal: PaletteColorVariant;
}

export type OptionalPaletteColor = Partial<PaletteColor>;
