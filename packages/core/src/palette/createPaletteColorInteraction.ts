/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { InteractionType } from '../interaction/InteractionType';
import { createPaletteColor } from './createPaletteColor';
import { PaletteColorInteraction } from './PaletteColorInteraction';
// tslint:disable-next-line:max-line-length
import { PaletteColorInteractionFactoryInput } from './PaletteColorInteractionFactoryInput';

export const createPaletteColorInteraction = (
  config: PaletteColorInteractionFactoryInput,
): PaletteColorInteraction => ({
  disabled: config.disabledColor,
  enabled: createPaletteColor({
    color: config.color,
    colorVariantFactory: config.colorVariantFactory,
    interactionType: InteractionType.ENABLED,
  }),
  focused: createPaletteColor({
    color: config.color,
    colorVariantFactory: config.colorVariantFactory,
    interactionType: InteractionType.FOCUSED,
  }),
  hovered: createPaletteColor({
    color: config.color,
    colorVariantFactory: config.colorVariantFactory,
    interactionType: InteractionType.HOVERED,
  }),
  pressed: createPaletteColor({
    color: config.color,
    colorVariantFactory: config.colorVariantFactory,
    interactionType: InteractionType.PRESSED,
  }),
});
