/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { InteractionType } from '@reflex-ui/core';
import { ElevationDegree } from './ElevationDegree';

export const convertInteractionToElevation = (
  interactionType: InteractionType,
  degree: ElevationDegree,
) => {
  let elevation = 0;
  if (interactionType === InteractionType.ENABLED) {
    if (degree === ElevationDegree.LOW) {
      elevation = 2;
    } else if (degree === ElevationDegree.MID) {
      elevation = 6;
    } else {
      elevation = 10;
    }
  } else if (
    interactionType === InteractionType.FOCUSED ||
    interactionType === InteractionType.HOVERED
  ) {
    if (degree === ElevationDegree.LOW) {
      elevation = 4;
    } else if (degree === ElevationDegree.MID) {
      elevation = 8;
    } else {
      elevation = 14;
    }
  } else if (interactionType === InteractionType.PRESSED) {
    if (degree === ElevationDegree.LOW) {
      elevation = 8;
    } else if (degree === ElevationDegree.MID) {
      elevation = 12;
    } else {
      elevation = 20;
    }
  }

  return elevation;
};
