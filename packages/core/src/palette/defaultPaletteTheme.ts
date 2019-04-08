/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PaletteColor } from './PaletteColor';
import { PaletteColorArrangement } from './PaletteColorArrangement';
import { PaletteColorInteraction } from './PaletteColorInteraction';
import { PaletteColorVariant } from './PaletteColorVariant';
import { PaletteTheme } from './PaletteTheme';

const black = '#000';
const transparent = 'transparent';
const white = '#fff';

const disabledContainedPaletteColorVariant: PaletteColorVariant = {
  color: '#e0e0e0',
  onColor: '#9e9e9e',
};

const disabledUncontainedPaletteColorVariant: PaletteColorVariant = {
  color: transparent,
  onColor: '#9e9e9e',
};

const whiteRegularContainedColorInteraction: PaletteColorInteraction = {
  activated: {
    color: '#e0e0e0',
    onColor: black,
  },
  disabled: disabledContainedPaletteColorVariant,
  enabled: {
    color: white,
    onColor: black,
  },
  focused: {
    color: '#e0e0e0',
    onColor: black,
  },
  hovered: {
    color: '#f5f5f5',
    onColor: black,
  },
  pressed: {
    color: '#d6d6d6',
    onColor: black,
  },
};

const whiteRegularUncontainedColorInteraction: PaletteColorInteraction = {
  activated: {
    color: '#e0e0e0',
    onColor: white,
  },
  disabled: disabledUncontainedPaletteColorVariant,
  enabled: {
    color: transparent,
    onColor: white,
  },
  focused: {
    color: '#e0e0e0',
    onColor: white,
  },
  hovered: {
    color: '#f5f5f5',
    onColor: white,
  },
  pressed: {
    color: '#d6d6d6',
    onColor: white,
  },
};

const whiteInvertedContainedColorInteraction: PaletteColorInteraction = {
  activated: {
    color: '#5c5c5c',
    onColor: white,
  },
  disabled: disabledContainedPaletteColorVariant,
  enabled: {
    color: black,
    onColor: white,
  },
  focused: {
    color: '#5c5c5c',
    onColor: white,
  },
  hovered: {
    color: '#292929',
    onColor: white,
  },
  pressed: {
    color: '#6b6b6b',
    onColor: white,
  },
};

const whiteInvertedUncontainedColorInteraction: PaletteColorInteraction = {
  activated: {
    color: '#cfcfcf',
    onColor: black,
  },
  disabled: disabledUncontainedPaletteColorVariant,
  enabled: {
    color: transparent,
    onColor: black,
  },
  focused: {
    color: '#cfcfcf',
    onColor: black,
  },
  hovered: {
    color: '#dbdbdb',
    onColor: black,
  },
  pressed: {
    color: '#bababa',
    onColor: black,
  },
};

const whitePaletteColorArrangement: PaletteColorArrangement = {
  inverted: {
    contained: whiteInvertedContainedColorInteraction,
    uncontained: whiteInvertedUncontainedColorInteraction,
  },
  regular: {
    contained: whiteRegularContainedColorInteraction,
    uncontained: whiteRegularUncontainedColorInteraction,
  },
};

const whitePaletteColor: PaletteColor = {
  dark: whitePaletteColorArrangement,
  light: whitePaletteColorArrangement,
  normal: whitePaletteColorArrangement,
};

export const defaultPaletteTheme: PaletteTheme = {
  background: whitePaletteColor,
  error: whitePaletteColor,
  primary: whitePaletteColor,
  secondary: whitePaletteColor,
  success: whitePaletteColor,
  surface: whitePaletteColor,
  warning: whitePaletteColor,
};
