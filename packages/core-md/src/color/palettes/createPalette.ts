/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Palette, PaletteOptional } from '@reflex-ui/core';
import merge from 'lodash/merge';

export const createPalette = (
  basePalette: Palette,
  palette: PaletteOptional,
): Palette => merge<{}, Palette, PaletteOptional>({}, basePalette, palette);
