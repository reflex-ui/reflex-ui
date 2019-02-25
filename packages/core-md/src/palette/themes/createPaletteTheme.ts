/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  createPaletteTheme as createPaletteThemeCore,
  PaletteTheme,
  PaletteThemeOptional,
} from '@reflex-ui/core';
import merge from 'lodash/merge';

export const createPaletteTheme = (
  baseTheme: PaletteTheme,
  theme: PaletteThemeOptional,
): PaletteTheme =>
  createPaletteThemeCore(
    merge<{}, PaletteTheme, PaletteThemeOptional>({}, baseTheme, theme),
  );
