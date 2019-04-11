/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LayeredColor } from './LayeredColor';

export interface ColorGamut {
  readonly contained: LayeredColor;
  readonly containedInverted: LayeredColor;
  readonly uncontained: LayeredColor;
  readonly uncontainedInverted: LayeredColor;
}

export type ColorGamutOptional = { [P in keyof ColorGamut]?: LayeredColor };
