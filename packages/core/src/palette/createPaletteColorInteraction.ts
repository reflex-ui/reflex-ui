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
  activated: createPaletteColor({
    color: config.color,
    colorVariantFactory: config.colorVariantFactory,
    interactionType: InteractionType.Activated,
  }),
  disabled: config.disabledColor,
  enabled: createPaletteColor({
    color: config.color,
    colorVariantFactory: config.colorVariantFactory,
    interactionType: InteractionType.Enabled,
  }),
  focused: createPaletteColor({
    color: config.color,
    colorVariantFactory: config.colorVariantFactory,
    interactionType: InteractionType.Focused,
  }),
  hovered: createPaletteColor({
    color: config.color,
    colorVariantFactory: config.colorVariantFactory,
    interactionType: InteractionType.Hovered,
  }),
  pressed: createPaletteColor({
    color: config.color,
    colorVariantFactory: config.colorVariantFactory,
    interactionType: InteractionType.Pressed,
  }),
});
