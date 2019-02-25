/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  PaletteColorContainment,
  PaletteColorContainmentOptional,
} from './PaletteColorContainment';

export interface PaletteColorArrangement {
  readonly inverted: PaletteColorContainment;
  readonly regular: PaletteColorContainment;
}

export type PaletteColorArrangementOptional = {
  [P in keyof PaletteColorArrangement]?: PaletteColorContainmentOptional
};
