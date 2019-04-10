/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PaletteTheme } from '@reflex-ui/core';

import {
  mdBlue500,
  mdBlue500Dark,
  mdBlue500Light,
} from '../colors/blue/mdBlue500';
import {
  mdOrange600,
  mdOrange600Dark,
  mdOrange600Light,
} from '../colors/orange/mdOrange600';
import {
  mdYellow600,
  mdYellow600Dark,
  mdYellow600Light,
} from '../colors/yellow/mdYellow600';
import { createPaletteTheme } from './createPaletteTheme';
import { defaultPaletteTheme } from './defaultPaletteTheme';

export const blue500Yellow600PaletteTheme: PaletteTheme = createPaletteTheme(
  defaultPaletteTheme,
  {
    primary: mdBlue500,
    primaryDark: mdBlue500Dark,
    primaryLight: mdBlue500Light,
    secondary: mdYellow600,
    secondaryDark: mdYellow600Dark,
    secondaryLight: mdYellow600Light,
    warning: mdOrange600,
    warningDark: mdOrange600Dark,
    warningLight: mdOrange600Light,
  },
);
