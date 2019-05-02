/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { InteractionType } from '@reflex-ui/core';
import { convertInteractionToElevation } from './convertInteractionToElevation';
import { ElevationStyleGetter } from './ElevationStyleGetter';
import { elevationStyles } from './elevationStyles';

export const getElevationStyles: ElevationStyleGetter = (
  elevation,
  interactionType = InteractionType.Enabled,
) => {
  const elevationNumber =
    typeof elevation === 'number'
      ? elevation
      : convertInteractionToElevation(interactionType, elevation);

  return elevationStyles[elevationNumber];
};
