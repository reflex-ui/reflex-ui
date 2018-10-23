import { ElevationStyleGetter } from './ElevationStyleGetter';
import { elevationStyles } from './elevationStyles';

export const getElevationStyles: ElevationStyleGetter = elevation => ({
  ...elevationStyles[elevation],
});
