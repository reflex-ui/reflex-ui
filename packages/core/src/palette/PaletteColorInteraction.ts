/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PaletteColorVariant } from './PaletteColorVariant';

export interface PaletteColorInteraction {
  readonly activated: PaletteColorVariant;
  readonly disabled: PaletteColorVariant;
  readonly enabled: PaletteColorVariant;
  readonly focused: PaletteColorVariant;
  readonly hovered: PaletteColorVariant;
  readonly pressed: PaletteColorVariant;
}

export interface PaletteColorInteractionOptional {
  readonly activated?: PaletteColorVariant;
  readonly disabled: PaletteColorVariant;
  readonly enabled: PaletteColorVariant;
  readonly focused?: PaletteColorVariant;
  readonly hovered?: PaletteColorVariant;
  readonly pressed?: PaletteColorVariant;
}
