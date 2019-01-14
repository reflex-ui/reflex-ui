/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PaletteTheme } from '@reflex-ui/core';

import { blue500 } from '../colors/blue';
import { orange600 } from '../colors/orange';
import { yellow600 } from '../colors/yellow';
import { createPaletteTheme } from './createPaletteTheme';
import { defaultPaletteTheme } from './defaultPaletteTheme';

export const blue500Yellow600PaletteTheme: PaletteTheme = createPaletteTheme(
  defaultPaletteTheme,
  {
    primary: blue500.color,
    secondary: yellow600.color,
    warning: orange600.color,
  },
);

/*
export const blue500Yellow600PaletteTheme: PaletteTheme = createPaletteTheme(
  defaultPaletteTheme,
  {
    primary: {
      disabled: {
        ...disabledAllNormalPaletteColor,
        normal: {
          color: '#C2C2C2', // rgba(0, 0, 0, 0.12)
          onColor: '#717171', // rgba(0, 0, 0, 0.37)
        },
      },
      enabled: blue500.color,
    },
    secondary: {
      disabled: {
        ...disabledAllNormalPaletteColor,
        dark: {
          ...disabledAllNormalPaletteColor.dark,
          onColor: '#888',
        },
      },
      enabled: yellow600.color,
    },
    warning: {
      disabled: {
        ...disabledAllNormalPaletteColor,
        normal: {
          ...disabledAllNormalPaletteColor.normal,
          onColor: '#868585',
        },
      },
      enabled: orange600.color,
    },
  },
);
*/
