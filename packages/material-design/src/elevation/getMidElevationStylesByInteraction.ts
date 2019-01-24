/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { InteractionType, ViewStyleGetter } from '@reflex-ui/core';
// prettier-ignore
import {
  convertInteractionToElevation,
} from './convertInteractionToElevation';
import { ElevationDegree } from './ElevationDegree';
import { getElevationStyles } from './getElevationStyles';

export const getMidElevationStylesByInteraction: ViewStyleGetter<
  InteractionType
> = interactionType => ({
  ...getElevationStyles(
    convertInteractionToElevation(interactionType, ElevationDegree.Mid),
  ),
});
