/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PaletteTheme } from '@reflex-ui/core';

import { disabledPaletteColor } from './disabledPaletteColor';
import { errorPaletteColor } from './errorPaletteColor';
import { successPaletteColor } from './successPaletteColor';
import { warningPaletteColor } from './warningPaletteColor';

export const purpleTealPaletteTheme: PaletteTheme = {
  background: {
    dark: {
      color: '#ffffff',
      onColor: '#000000',
    },
    light: {
      color: '#ffffff',
      onColor: '#000000',
    },
    normal: {
      color: '#ffffff',
      onColor: '#000000',
    },
  },
  disabled: disabledPaletteColor,
  error: errorPaletteColor,
  primary: {
    dark: {
      color: '#0400ba',
      onColor: '#ffffff',
    },
    light: {
      color: '#9e47ff',
      onColor: '#ffffff',
    },
    normal: {
      color: '#6200ee',
      onColor: '#ffffff',
    },
  },
  secondary: {
    dark: {
      color: '#00a895',
      onColor: '#000000',
    },
    light: {
      color: '#66fff8',
      onColor: '#000000',
    },
    normal: {
      color: '#03dac5',
      onColor: '#000000',
    },
  },
  success: successPaletteColor,
  surface: {
    dark: {
      color: '#ffffff',
      onColor: '#000000',
    },
    light: {
      color: '#ffffff',
      onColor: '#000000',
    },
    normal: {
      color: '#ffffff',
      onColor: '#000000',
    },
  },
  warning: warningPaletteColor,
};
