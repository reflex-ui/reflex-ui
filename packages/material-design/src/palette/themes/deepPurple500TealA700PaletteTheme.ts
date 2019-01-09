/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PaletteTheme } from '@reflex-ui/core';

import { deepPurple500 } from '../colors/deepPurple';
// prettier-ignore
import {
  disabledAllNormalPaletteColor,
} from '../colors/disabledAllNormalPaletteColor';
import { tealA700 } from '../colors/teal';
import { createPaletteTheme } from './createPaletteTheme';
import { defaultPaletteTheme } from './defaultPaletteTheme';

// tslint:disable-next-line:max-line-length
export const deepPurple500TealA700PaletteTheme: PaletteTheme = createPaletteTheme(
  defaultPaletteTheme,
  {
    primary: {
      disabled: disabledAllNormalPaletteColor,
      enabled: deepPurple500.color,
    },
    secondary: {
      disabled: disabledAllNormalPaletteColor,
      enabled: tealA700.color,
    },
  },
);
