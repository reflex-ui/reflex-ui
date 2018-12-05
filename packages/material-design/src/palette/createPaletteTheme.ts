/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  createPaletteTheme as createPaletteThemeCore,
  OptionalPaletteTheme,
  PaletteTheme,
} from '@reflex-ui/core';
import merge from 'lodash/merge';
import { purpleTealPaletteTheme } from './purpleTealPaletteTheme';

export const createPaletteTheme = (theme: OptionalPaletteTheme): PaletteTheme =>
  createPaletteThemeCore(merge({}, purpleTealPaletteTheme, theme));
