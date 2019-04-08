/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { InteractionType } from '../interaction/InteractionType';
import { PaletteColorInteraction } from './PaletteColorInteraction';
// tslint:disable-next-line:max-line-length
import { PaletteColorInteractionFactoryInput } from './PaletteColorInteractionFactoryInput';

export const createPaletteColorInteraction = (
  config: PaletteColorInteractionFactoryInput,
): PaletteColorInteraction => ({
  activated: config.colorVariantFactory({
    color: config.colorVariant,
    interactionType: InteractionType.Activated,
  }),
  disabled: config.disabledColorVariant,
  enabled: config.colorVariantFactory({
    color: config.colorVariant,
    interactionType: InteractionType.Enabled,
  }),
  focused: config.colorVariantFactory({
    color: config.colorVariant,
    interactionType: InteractionType.Focused,
  }),
  hovered: config.colorVariantFactory({
    color: config.colorVariant,
    interactionType: InteractionType.Hovered,
  }),
  pressed: config.colorVariantFactory({
    color: config.colorVariant,
    interactionType: InteractionType.Pressed,
  }),
});
