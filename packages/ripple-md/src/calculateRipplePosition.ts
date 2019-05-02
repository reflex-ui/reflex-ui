/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Position2D } from './Position2D';
import { RipplePositionCalculatorInput } from './RipplePositionCalculatorInput';

export const calculateRipplePosition = ({
  diameter,
  interactionPosition,
}: RipplePositionCalculatorInput): Position2D => ({
  x: interactionPosition.x - diameter / 2,
  y: interactionPosition.y - diameter / 2,
});
