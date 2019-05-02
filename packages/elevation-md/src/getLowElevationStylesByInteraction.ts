/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ElevationDegree,
  InteractionType,
  ViewStyleGetter,
} from '@reflex-ui/core';
import { convertInteractionToElevation } from './convertInteractionToElevation';
import { getElevationStyles } from './getElevationStyles';

export const getLowElevationStylesByInteraction: ViewStyleGetter<
  InteractionType
> = interactionType => ({
  ...getElevationStyles(
    convertInteractionToElevation(interactionType, ElevationDegree.Low),
  ),
});
