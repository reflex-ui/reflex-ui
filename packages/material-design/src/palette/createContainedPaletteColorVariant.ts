/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  PaletteColorVariant,
  PaletteColorVariantFactory,
  PaletteColorVariantFactoryConfig,
} from '@reflex-ui/core';

import { getInlayColorByInteractivity } from './getInlayColorByInteractivity';

export const createContainedPaletteColorVariant: PaletteColorVariantFactory = (
  config: PaletteColorVariantFactoryConfig,
): PaletteColorVariant => ({
  color: getInlayColorByInteractivity({
    color: config.color.color,
    type: config.interactivityType,
  }),
  onColor: config.color.onColor,
});
