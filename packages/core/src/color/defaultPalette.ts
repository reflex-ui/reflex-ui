/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { FlexColor } from './FlexColor';
import { LayeredColor } from './LayeredColor';
import { Palette } from './Palette';
import { PaletteColor } from './PaletteColor';

const black = '#000';
const transparent = 'transparent';
const white = '#fff';

const disabledContainedLayeredColor: LayeredColor = {
  color: '#e0e0e0',
  onColor: '#9e9e9e',
};

const disabledUncontainedLayeredColor: LayeredColor = {
  color: transparent,
  onColor: '#9e9e9e',
};

const whiteFlexColor: FlexColor = {
  activated: {
    contained: {
      color: '#e0e0e0',
      onColor: black,
    },
    containedInverted: {
      color: '#5c5c5c',
      onColor: white,
    },
    uncontained: {
      color: '#e0e0e0',
      onColor: white,
    },
    uncontainedInverted: {
      color: '#cfcfcf',
      onColor: black,
    },
  },
  disabled: {
    contained: disabledContainedLayeredColor,
    containedInverted: disabledContainedLayeredColor,
    uncontained: disabledUncontainedLayeredColor,
    uncontainedInverted: disabledUncontainedLayeredColor,
  },
  enabled: {
    contained: {
      color: white,
      onColor: black,
    },
    containedInverted: {
      color: black,
      onColor: white,
    },
    uncontained: {
      color: transparent,
      onColor: white,
    },
    uncontainedInverted: {
      color: transparent,
      onColor: black,
    },
  },
  focused: {
    contained: {
      color: '#e0e0e0',
      onColor: black,
    },
    containedInverted: {
      color: '#5c5c5c',
      onColor: white,
    },
    uncontained: {
      color: '#e0e0e0',
      onColor: white,
    },
    uncontainedInverted: {
      color: '#cfcfcf',
      onColor: black,
    },
  },
  hovered: {
    contained: {
      color: '#f5f5f5',
      onColor: black,
    },
    containedInverted: {
      color: '#292929',
      onColor: white,
    },
    uncontained: {
      color: '#f5f5f5',
      onColor: white,
    },
    uncontainedInverted: {
      color: '#dbdbdb',
      onColor: black,
    },
  },
  pressed: {
    contained: {
      color: '#d6d6d6',
      onColor: black,
    },
    containedInverted: {
      color: '#6b6b6b',
      onColor: white,
    },
    uncontained: {
      color: '#d6d6d6',
      onColor: white,
    },
    uncontainedInverted: {
      color: '#bababa',
      onColor: black,
    },
  },
};

const whitePaletteColor: PaletteColor = {
  color: whiteFlexColor,
  name: 'White (@reflex-ui/core',
};

export const defaultPalette: Palette = {
  error: whitePaletteColor,
  errorDark: whitePaletteColor,
  errorLight: whitePaletteColor,
  primary: whitePaletteColor,
  primaryDark: whitePaletteColor,
  primaryLight: whitePaletteColor,
  screen: whitePaletteColor,
  screenDark: whitePaletteColor,
  screenLight: whitePaletteColor,
  secondary: whitePaletteColor,
  secondaryDark: whitePaletteColor,
  secondaryLight: whitePaletteColor,
  success: whitePaletteColor,
  successDark: whitePaletteColor,
  successLight: whitePaletteColor,
  surface: whitePaletteColor,
  surfaceDark: whitePaletteColor,
  surfaceLight: whitePaletteColor,
  warning: whitePaletteColor,
  warningDark: whitePaletteColor,
  warningLight: whitePaletteColor,
};
