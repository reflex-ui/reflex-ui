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
