/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PaletteTheme } from '@reflex-ui/core';

import { mdDeepPurple500 } from '../colors/deepPurple';
import { mdTealA700 } from '../colors/teal';
import { createPaletteTheme } from './createPaletteTheme';
import { defaultPaletteTheme } from './defaultPaletteTheme';

// tslint:disable-next-line:max-line-length
export const deepPurple500TealA700PaletteTheme: PaletteTheme = createPaletteTheme(
  defaultPaletteTheme,
  {
    primary: mdDeepPurple500.color,
    secondary: mdTealA700.color,
  },
);
