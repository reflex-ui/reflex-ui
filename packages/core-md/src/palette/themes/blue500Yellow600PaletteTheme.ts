/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PaletteTheme } from '@reflex-ui/core';

import { mdBlue500 } from '../colors/blue/mdBlue500';
import { mdOrange600 } from '../colors/orange/mdOrange600';
import { mdYellow600 } from '../colors/yellow/mdYellow600';
import { createPaletteTheme } from './createPaletteTheme';
import { defaultPaletteTheme } from './defaultPaletteTheme';

export const blue500Yellow600PaletteTheme: PaletteTheme = createPaletteTheme(
  defaultPaletteTheme,
  {
    primary: mdBlue500.color,
    secondary: mdYellow600.color,
    warning: mdOrange600.color,
  },
);
