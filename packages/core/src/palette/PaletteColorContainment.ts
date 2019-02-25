/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  PaletteColorInteraction,
  PaletteColorInteractionOptional,
} from './PaletteColorInteraction';

export interface PaletteColorContainment {
  readonly contained: PaletteColorInteraction;
  readonly uncontained: PaletteColorInteraction;
}

export type PaletteColorContainmentOptional = {
  [P in keyof PaletteColorContainment]?: PaletteColorInteractionOptional
};
