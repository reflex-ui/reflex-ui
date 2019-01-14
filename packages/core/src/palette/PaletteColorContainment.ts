/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  InteractivityPaletteColor,
  OptionalInteractivityPaletteColor,
} from './InteractivityPaletteColor';

export interface PaletteColorContainment {
  readonly contained: InteractivityPaletteColor;
  readonly uncontained: InteractivityPaletteColor;
}

export type OptionalPaletteColorContainment = {
  [P in keyof PaletteColorContainment]?: OptionalInteractivityPaletteColor
};
