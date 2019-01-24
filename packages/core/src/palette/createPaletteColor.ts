/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PaletteColor } from './PaletteColor';
import { PaletteColorFactoryInput } from './PaletteColorFactoryInput';

export const createPaletteColor = (
  config: PaletteColorFactoryInput,
): PaletteColor => ({
  dark: config.colorVariantFactory({
    color: config.color.dark,
    interactionType: config.interactionType,
  }),
  light: config.colorVariantFactory({
    color: config.color.light,
    interactionType: config.interactionType,
  }),
  normal: config.colorVariantFactory({
    color: config.color.normal,
    interactionType: config.interactionType,
  }),
});
