/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { InteractionType } from '../interaction/InteractionType';
import { ThemedColorGetter } from './ThemedColorGetter';

export const getThemedColor: ThemedColorGetter = ({
  contained,
  interactionState = { type: InteractionType.Enabled },
  invertColor,
  onColor,
  paletteColor,
}): string => {
  const colorGamut = paletteColor.color[interactionState.type];
  let layeredColor;
  if (contained) {
    layeredColor = invertColor
      ? colorGamut.containedInverted
      : colorGamut.contained;
  } else {
    layeredColor = invertColor
      ? colorGamut.uncontainedInverted
      : colorGamut.uncontained;
  }

  return onColor ? layeredColor.onColor : layeredColor.color;
};
