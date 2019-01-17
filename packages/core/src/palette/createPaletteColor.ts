/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PaletteColor } from './PaletteColor';
import { PaletteColorFactoryConfig } from './PaletteColorFactoryConfig';

export const createPaletteColor = (
  config: PaletteColorFactoryConfig,
): PaletteColor => ({
  dark: config.colorVariantFactory({
    color: config.color.dark,
    interactivityType: config.interactivityType,
  }),
  light: config.colorVariantFactory({
    color: config.color.light,
    interactivityType: config.interactivityType,
  }),
  normal: config.colorVariantFactory({
    color: config.color.normal,
    interactivityType: config.interactivityType,
  }),
});
