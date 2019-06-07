/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Elevation, InteractionType, isIOS } from '@reflex-ui/core';

import { getElevationStyles } from './getElevationStyles';

export const createMotionElevationShadowStyle = (
  elevation: Elevation,
  interactionType: InteractionType,
) => {
  // We do this to avoid mutating the original object
  const styles = JSON.parse(
    JSON.stringify(getElevationStyles(elevation, interactionType)),
  );

  /*
   * We flatten values here to animate them.
   */
  if (isIOS && styles.shadowOffset) {
    styles.height = styles.shadowOffset.height;
    styles.width = styles.shadowOffset.width;
    delete styles.shadowOffset;
  }
  /**/

  return styles;
};
