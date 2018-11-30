/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { getThemedColor } from '@reflex-ui/core';
// prettier-ignore
import {
  getOverlayColorByInteractivity,
} from './getOverlayColorByInteractivity';
// prettier-ignore
import {
  ThemedColorByInteractivityData,
} from './ThemedColorByInteractivityData';

export const getThemedOverlayColorByInteractivity = ({
  colorTheme,
  interactivityType,
  paletteTheme,
}: ThemedColorByInteractivityData): string =>
  getOverlayColorByInteractivity({
    color: getThemedColor({ colorTheme, interactivityType, paletteTheme }),
    type: interactivityType,
  });
