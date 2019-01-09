/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PaletteTheme } from '@reflex-ui/core';

// prettier-ignore
import {
  disabledAllNormalPaletteColor,
} from '../colors/disabledAllNormalPaletteColor';
import { disabledPaletteColor } from '../colors/disabledPaletteColor';
import { green800 } from '../colors/green';
import { red900 } from '../colors/red';
import { whitePaletteColor } from '../colors/whitePaletteColor';
import { yellow600 } from '../colors/yellow';

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
