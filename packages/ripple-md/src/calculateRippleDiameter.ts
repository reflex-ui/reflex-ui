/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { RippleDiameterCalculatorInput } from './RippleDiameterCalculatorInput';

export const calculateRippleDiameter = ({
  height,
  maxDiameter = 2000,
  offset = 1.2,
  posX,
  width,
}: RippleDiameterCalculatorInput): number => {
  let diameter = Math.ceil(Math.sqrt(width * width + height * height));

  const dist = Math.round(Math.sqrt(Math.pow(posX - diameter / 2, 2)));
  const distRate = (dist * 1) / (diameter / 2) + offset;

  diameter *= distRate;

  return Math.min(diameter, maxDiameter);
};
