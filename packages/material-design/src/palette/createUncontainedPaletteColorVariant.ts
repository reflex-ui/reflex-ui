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

// tslint:disable-next-line:max-line-length
import { getOverlayColorByInteractivity } from './getOverlayColorByInteractivity';

// tslint:disable-next-line:max-line-length
export const createUncontainedPaletteColorVariant: PaletteColorVariantFactory = (
  config: PaletteColorVariantFactoryConfig,
): PaletteColorVariant => ({
  color: getOverlayColorByInteractivity({
    color: config.baseColor.color,
    type: config.interactivityType,
  }),
  onColor: config.baseColor.onColor,
});
