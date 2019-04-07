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
  /*
   * When a color is too light (white or close to it)
   * we cannot apply .fade() to it as the change will be
   * undiscriminated (or almost undiscriminated),
   * so we darken it a little to be able to see the change.
   */
  let rgbColor = Color.rgb(color);
  const luminosity = rgbColor.luminosity();

  if (luminosity >= 0.92) {
    rgbColor = rgbColor.darken(luminosity - 0.6);
  }
  /**/

  switch (type) {
    case InteractionType.Disabled:
      return 'transparent';
    case InteractionType.Enabled:
      return 'transparent';
    case InteractionType.Activated:
    case InteractionType.Focused:
      return rgbColor.fade(0.81).toString();
    case InteractionType.Hovered:
      return rgbColor.fade(0.86).toString();
    case InteractionType.Pressed:
      return rgbColor.fade(0.73).toString();
    default:
      return 'transparent';
  }
};
