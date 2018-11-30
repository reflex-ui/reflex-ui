/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { InteractivityType, ViewStyleGetter } from '@reflex-ui/core';
// prettier-ignore
import {
  convertInteractivityToElevation,
} from './convertInteractivityToElevation';
import { ElevationDegree } from './ElevationDegree';
import { getElevationStyles } from './getElevationStyles';

export const getMidElevationStylesByInteractivity: ViewStyleGetter<
  InteractivityType
> = interactivityType => ({
  ...getElevationStyles(
    convertInteractivityToElevation(interactivityType, ElevationDegree.MID),
  ),
});
