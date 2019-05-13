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
  posX,
  posY,
  width,
}: RippleDiameterCalculatorInput): number => {
  const pointerOffsetX = Math.abs(posX - width / 2);
  const pointerOffsetY = Math.abs(posY - height / 2);
  const widthWithOffset = width + pointerOffsetX * 2;
  const heightWithOffset = height + pointerOffsetY * 2;
  const diameter = Math.ceil(
    Math.sqrt(
      widthWithOffset * widthWithOffset + heightWithOffset * heightWithOffset,
    ),
  );

  return Math.min(diameter, maxDiameter);
};
