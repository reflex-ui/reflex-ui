/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PaletteColorVariant } from './PaletteColorVariant';

export const createPaletteColorVariantUsingColorOnly = (
  colorVariant: PaletteColorVariant,
): PaletteColorVariant => ({
  color: colorVariant.color,
  onColor: colorVariant.color,
});
