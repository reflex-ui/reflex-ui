/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export interface RippleDiameterCalculatorInput {
  readonly height: number;
  readonly maxDiameter?: number;
  readonly posX: number;
  readonly posY: number;
  readonly width: number;
}
