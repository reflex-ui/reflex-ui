/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PaletteTheme } from '@reflex-ui/core';

import { blue500 } from '../colors/blue';
// prettier-ignore
import {
  disabledAllNormalPaletteColor,
} from '../colors/disabledAllNormalPaletteColor';
// import { disabledPaletteColor } from '../colors/disabledPaletteColor';
import { orange600 } from '../colors/orange';
import { yellow600 } from '../colors/yellow';
import { createPaletteTheme } from './createPaletteTheme';
import { defaultPaletteTheme } from './defaultPaletteTheme';

// tslint:disable-next-line:max-line-length
export const blue500Yellow600PaletteTheme: PaletteTheme = createPaletteTheme(
  defaultPaletteTheme,
  {
    primary: {
      // disabled: disabledAllNormalPaletteColor,
      // disabled: disabledPaletteColor,
      disabled: {
        /*
        dark: {
          color: '#C2C2C2', // rgba(0, 0, 0, 0.24)
          onColor: '#9B9B9B', // rgba(0, 0, 0, 0.20)
        },
        light: {
          color: '#F0F0F0', // rgba(0, 0, 0, 0.06)
          onColor: '#ADADAD', // rgba(0, 0, 0, 0.32)
        },
        */
        ...disabledAllNormalPaletteColor,
        normal: {
          color: '#C2C2C2', // rgba(0, 0, 0, 0.12)
          onColor: '#717171', // rgba(0, 0, 0, 0.37)
        },
        /*
        normal: {
          color: '#C2C2C2', // rgba(0, 0, 0, 0.24)
          onColor: '#bfbaba', // rgba(0, 0, 0, 0.20)
        },
        */
      },
      enabled: blue500.color,
    },
    secondary: {
      // disabled: disabledAllNormalPaletteColor,
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
      // disabled: disabledAllNormalPaletteColor,
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
