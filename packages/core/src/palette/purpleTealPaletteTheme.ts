/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PaletteColor } from './PaletteColor';
import { PaletteTheme } from './PaletteTheme';

const disabledPaletteColor: PaletteColor = {
  dark: {
    color: '#C2C2C2', // rgba(0, 0, 0, 0.24)
    onColor: '#9B9B9B', // rgba(0, 0, 0, 0.20)
  },
  light: {
    color: '#F0F0F0', // rgba(0, 0, 0, 0.06)
    onColor: '#ADADAD', // rgba(0, 0, 0, 0.32)
  },
  normal: {
    color: '#E0E0E0', // rgba(0, 0, 0, 0.12)
    onColor: '#A1A1A1', // rgba(0, 0, 0, 0.37)
  },
};

export const purpleTealPaletteTheme: PaletteTheme = {
  background: {
    disabled: disabledPaletteColor,
    enabled: {
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
  },
  error: {
    disabled: disabledPaletteColor,
    enabled: {
      dark: {
        color: '#b00020',
        onColor: '#ffffff',
      },
      light: {
        color: '#b00020',
        onColor: '#ffffff',
      },
      normal: {
        color: '#b00020',
        onColor: '#ffffff',
      },
    },
  },
  primary: {
    disabled: disabledPaletteColor,
    enabled: {
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
  },
  secondary: {
    disabled: disabledPaletteColor,
    enabled: {
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
  },
  success: {
    disabled: disabledPaletteColor,
    enabled: {
      dark: {
        color: '#087f23',
        onColor: '#ffffff',
      },
      light: {
        color: '#80e27e',
        onColor: '#000000',
      },
      normal: {
        color: '#4caf50',
        onColor: '#000000',
      },
    },
  },
  surface: {
    disabled: disabledPaletteColor,
    enabled: {
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
  },
  warning: {
    disabled: disabledPaletteColor,
    enabled: {
      dark: {
        color: '#c6a700',
        onColor: '#000000',
      },
      light: {
        color: '#ffff6b',
        onColor: '#000000',
      },
      normal: {
        color: '#fdd835',
        onColor: '#000000',
      },
    },
  },
};
