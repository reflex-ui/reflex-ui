/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PaletteTheme } from '@reflex-ui/core';

import { green800 } from '../colors/green';
import { red900 } from '../colors/red';
import { white } from '../colors/white/white';
import { yellow600 } from '../colors/yellow';

export const defaultPaletteTheme: PaletteTheme = {
  background: white.color,
  error: red900.color,
  primary: white.color,
  secondary: white.color,
  success: green800.color,
  surface: white.color,
  warning: yellow600.color,
};

/*
export const defaultPaletteTheme: PaletteTheme = {
  background: {
    disabled: disabledAllNormalPaletteColor,
    enabled: whitePaletteColor,
  },
  error: {
    disabled: disabledPaletteColor,
    enabled: red900.color,
  },
  primary: {
    disabled: disabledAllNormalPaletteColor,
    enabled: whitePaletteColor,
  },
  secondary: {
    disabled: disabledAllNormalPaletteColor,
    enabled: whitePaletteColor,
  },
  success: {
    disabled: {
      ...disabledAllNormalPaletteColor,
      light: {
        color: '#F0F0F0',
        onColor: '#ccc',
      },
    },
    enabled: green800.color,
  },
  surface: {
    disabled: disabledAllNormalPaletteColor,
    enabled: whitePaletteColor,
  },
  warning: {
    disabled: disabledAllNormalPaletteColor,
    enabled: yellow600.color,
  },
};
*/
