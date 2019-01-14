/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { InteractivityType } from '../interactivity/InteractivityType';
import { createPaletteColor } from './createPaletteColor';
import { InteractivityPaletteColor } from './InteractivityPaletteColor';
// prettier-ignore
import {
  PaletteColorInteractionFactoryConfig,
} from './PaletteColorInteractionFactoryConfig';

export const createPaletteColorInteraction = (
  config: PaletteColorInteractionFactoryConfig,
): InteractivityPaletteColor => ({
  disabled: config.disabledColor,
  enabled: createPaletteColor({
    baseColor: config.baseColor,
    colorVariantFactory: config.colorVariantFactory,
    interactivityType: InteractivityType.ENABLED,
  }),
  focused: createPaletteColor({
    baseColor: config.baseColor,
    colorVariantFactory: config.colorVariantFactory,
    interactivityType: InteractivityType.FOCUSED,
  }),
  hovered: createPaletteColor({
    baseColor: config.baseColor,
    colorVariantFactory: config.colorVariantFactory,
    interactivityType: InteractivityType.HOVERED,
  }),
  pressed: createPaletteColor({
    baseColor: config.baseColor,
    colorVariantFactory: config.colorVariantFactory,
    interactivityType: InteractivityType.PRESSED,
  }),
});
