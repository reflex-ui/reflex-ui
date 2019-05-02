/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ElevationDegree, InteractionType } from '@reflex-ui/core';

export const convertInteractionToElevation = (
  interactionType: InteractionType,
  degree: ElevationDegree,
) => {
  let elevation = 0;
  if (interactionType === InteractionType.Enabled) {
    if (degree === ElevationDegree.Low) {
      elevation = 2;
    } else if (degree === ElevationDegree.Mid) {
      elevation = 6;
    } else {
      elevation = 10;
    }
  } else if (
    interactionType === InteractionType.Focused ||
    interactionType === InteractionType.Hovered
  ) {
    if (degree === ElevationDegree.Low) {
      elevation = 4;
    } else if (degree === ElevationDegree.Mid) {
      elevation = 8;
    } else {
      elevation = 14;
    }
  } else if (interactionType === InteractionType.Pressed) {
    if (degree === ElevationDegree.Low) {
      elevation = 8;
    } else if (degree === ElevationDegree.Mid) {
      elevation = 12;
    } else {
      elevation = 20;
    }
  }

  return elevation;
};
