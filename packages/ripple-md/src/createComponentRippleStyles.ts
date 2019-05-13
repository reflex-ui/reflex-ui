/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { calculateRippleDiameter } from './calculateRippleDiameter';
import { calculateRipplePosition } from './calculateRipplePosition';
// tslint:disable-next-line:max-line-length
import { ComponentRippleStylesFactoryInput } from './ComponentRippleStylesFactoryInput';
import { createRippleStyles } from './createRippleStyles';
import { getInteractionPosition } from './getInteractionPosition';
import { RippleStyles } from './RippleStyles';

export const createComponentRippleStyles = ({
  color,
  height,
  interactionEvent,
  maxDiameter,
  style,
  width,
}: ComponentRippleStylesFactoryInput): RippleStyles => {
  const interactionPosition = getInteractionPosition(interactionEvent);
  const diameter = calculateRippleDiameter({
    height,
    maxDiameter,
    posX: interactionPosition.x,
    posY: interactionPosition.y,
    width,
  });

  const position = calculateRipplePosition({ diameter, interactionPosition });

  return createRippleStyles({
    color,
    diameter,
    position,
    style,
  });
};
