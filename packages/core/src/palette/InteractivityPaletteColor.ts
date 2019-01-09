/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PaletteColor } from './PaletteColor';

export interface InteractivityPaletteColor {
  readonly disabled: PaletteColor;
  readonly enabled: PaletteColor;
}

export interface OptionalInteractivityPaletteColor {
  readonly disabled?: PaletteColor;
  readonly enabled: PaletteColor;
}
