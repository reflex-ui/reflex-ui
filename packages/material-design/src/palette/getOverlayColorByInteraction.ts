/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { InteractionType } from '@reflex-ui/core';
import * as Color from 'color';
import { ColorByInteractionGetterInput } from './ColorByInteractionGetterInput';

export const getOverlayColorByInteraction = ({
  color,
  type,
}: ColorByInteractionGetterInput): string => {
  switch (type) {
    case InteractionType.DISABLED:
      return 'transparent';
    case InteractionType.ENABLED:
      return 'transparent';
    case InteractionType.FOCUSED:
      return Color.rgb(color)
        .fade(0.81)
        .toString();
    case InteractionType.HOVERED:
      return Color.rgb(color)
        .fade(0.86)
        .toString();
    case InteractionType.PRESSED:
      return Color.rgb(color)
        .fade(0.73)
        .toString();
    default:
      return 'transparent';
  }
};
