/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { getThemedColor } from '@reflex-ui/core';
import { getInlayColorByInteractivity } from './getInlayColorByInteractivity';
// prettier-ignore
import {
  ThemedColorByInteractivityData,
} from './ThemedColorByInteractivityData';

export const getThemedInlayColorByInteractivity = ({
  colorTheme,
  interactivityState,
  onColor,
  paletteTheme,
}: ThemedColorByInteractivityData): string =>
  getInlayColorByInteractivity({
    color: getThemedColor({
      colorTheme,
      interactivityState,
      onColor,
      paletteTheme,
    }),
    type: interactivityState.type,
  });
