/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PaletteColor } from './PaletteColor';

export const createPaletteColorUsingColorOnly = (
  paletteColor: PaletteColor,
) => ({
  dark: {
    color: paletteColor.dark.color,
    onColor: paletteColor.dark.color,
  },
  light: {
    color: paletteColor.light.color,
    onColor: paletteColor.light.color,
  },
  normal: {
    color: paletteColor.normal.color,
    onColor: paletteColor.normal.color,
  },
});
