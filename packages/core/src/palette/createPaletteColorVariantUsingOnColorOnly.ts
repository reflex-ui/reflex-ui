/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PaletteColorVariant } from './PaletteColorVariant';

export const createPaletteColorVariantUsingOnColorOnly = (
  colorVariant: PaletteColorVariant,
): PaletteColorVariant => ({
  color: colorVariant.onColor,
  onColor: colorVariant.onColor,
});
