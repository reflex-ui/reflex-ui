/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PaletteColor } from './PaletteColor';

export const fromOnColorOnlyPaletteColor = (paletteColor: PaletteColor) => ({
  dark: {
    color: paletteColor.dark.onColor,
    onColor: paletteColor.dark.onColor,
  },
  light: {
    color: paletteColor.light.onColor,
    onColor: paletteColor.light.onColor,
  },
  normal: {
    color: paletteColor.normal.onColor,
    onColor: paletteColor.normal.onColor,
  },
});
