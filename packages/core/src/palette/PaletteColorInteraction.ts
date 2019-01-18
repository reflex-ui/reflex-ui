/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PaletteColor } from './PaletteColor';

export interface PaletteColorInteraction {
  readonly disabled: PaletteColor;
  readonly enabled: PaletteColor;
  readonly focused: PaletteColor;
  readonly hovered: PaletteColor;
  readonly pressed: PaletteColor;
}

export interface OptionalPaletteColorInteraction {
  readonly disabled: PaletteColor;
  readonly enabled: PaletteColor;
  readonly focused?: PaletteColor;
  readonly hovered?: PaletteColor;
  readonly pressed?: PaletteColor;
}
