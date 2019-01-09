/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { InteractivityType } from '@reflex-ui/core';
import * as Color from 'color';
import { ColorByInteractivityData } from './ColorByInteractivityData';

export const getOverlayColorByInteractivity = ({
  color,
  type,
}: ColorByInteractivityData): string => {
  switch (type) {
    case InteractivityType.DISABLED:
      return 'transparent';
    case InteractivityType.ENABLED:
      return 'transparent';
    case InteractivityType.FOCUSED:
      return Color.rgb(color)
        .fade(0.81)
        .toString();
    case InteractivityType.HOVERED:
      return Color.rgb(color)
        .fade(0.86)
        .toString();
    case InteractivityType.PRESSED:
      return Color.rgb(color)
        .fade(0.73)
        .toString();
    default:
      return 'transparent';
  }
};
