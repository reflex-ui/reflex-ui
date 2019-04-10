/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PaletteTheme } from '@reflex-ui/core';

import {
  mdDeepPurple500,
  mdDeepPurple500Dark,
  mdDeepPurple500Light,
} from '../colors/deepPurple/mdDeepPurple500';
import {
  mdTealA700,
  mdTealA700Dark,
  mdTealA700Light,
} from '../colors/teal/mdTealA700';
import { createPaletteTheme } from './createPaletteTheme';
import { defaultPaletteTheme } from './defaultPaletteTheme';

// tslint:disable-next-line:max-line-length
export const deepPurple500TealA700PaletteTheme: PaletteTheme = createPaletteTheme(
  defaultPaletteTheme,
  {
    primary: mdDeepPurple500,
    primaryDark: mdDeepPurple500Dark,
    primaryLight: mdDeepPurple500Light,
    secondary: mdTealA700,
    secondaryDark: mdTealA700Dark,
    secondaryLight: mdTealA700Light,
  },
);
