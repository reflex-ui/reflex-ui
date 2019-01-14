/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PaletteTheme } from '@reflex-ui/core';

import { mdGreen800 } from '../colors/green';
import { mdRed900 } from '../colors/red';
import { mdWhite } from '../colors/white/white';
import { mdYellow600 } from '../colors/yellow';

export const defaultPaletteTheme: PaletteTheme = {
  background: mdWhite.color,
  error: mdRed900.color,
  primary: mdWhite.color,
  secondary: mdWhite.color,
  success: mdGreen800.color,
  surface: mdWhite.color,
  warning: mdYellow600.color,
};
