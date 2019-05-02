/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Position2D } from './Position2D';

export interface RipplePositionCalculatorInput {
  readonly diameter: number;
  readonly interactionPosition: Position2D;
}
