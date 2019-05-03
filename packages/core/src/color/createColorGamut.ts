/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ColorGamut } from './ColorGamut';
import { ColorGamutFactoryInput } from './ColorGamutFactoryInput';

export const createColorGamut = (
  config: ColorGamutFactoryInput,
): ColorGamut => ({
  contained: config.containedColorFactory({
    color: config.containedColor,
    interactionType: config.interactionType,
  }),
  containedInverted: config.containedColorFactory({
    color: config.containedInvertedColor,
    interactionType: config.interactionType,
  }),
  uncontained: config.uncontainedColorFactory({
    color: config.uncontainedColor,
    interactionType: config.interactionType,
  }),
  uncontainedInverted: config.uncontainedColorFactory({
    color: config.uncontainedInvertedColor,
    interactionType: config.interactionType,
  }),
});
