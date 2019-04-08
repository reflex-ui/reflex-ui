/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { InteractionType } from '../interaction/InteractionType';
import { ThemedColorGetter } from './ThemedColorGetter';

export const getThemedColor: ThemedColorGetter = ({
  colorArrangement,
  contained,
  interactionState = { type: InteractionType.Enabled },
  invertColor,
  onColor,
}): string => {
  const colorContainment = invertColor
    ? colorArrangement.inverted
    : colorArrangement.regular;
  const colorInteraction = contained
    ? colorContainment.contained
    : colorContainment.uncontained;

  const colorVariant = colorInteraction[interactionState.type];

  return onColor ? colorVariant.onColor : colorVariant.color;
};
