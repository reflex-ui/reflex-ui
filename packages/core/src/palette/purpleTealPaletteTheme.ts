/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { InteractivityPaletteColor } from './InteractivityPaletteColor';
import { PaletteColor } from './PaletteColor';
import { PaletteColorArrangement } from './PaletteColorArrangement';
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

const blackPaletteColor: PaletteColor = {
  dark: {
    color: '#000000',
    onColor: '#ffffff',
  },
  light: {
    color: '#000000',
    onColor: '#ffffff',
  },
  normal: {
    color: '#000000',
    onColor: '#ffffff',
  },
};

const whitePaletteColor: PaletteColor = {
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
};

const blackInteractivityPaletteColor: InteractivityPaletteColor = {
  disabled: disabledPaletteColor,
  enabled: blackPaletteColor,
  focused: blackPaletteColor,
  hovered: blackPaletteColor,
  pressed: blackPaletteColor,
};

const whiteInteractivityPaletteColor: InteractivityPaletteColor = {
  disabled: disabledPaletteColor,
  enabled: whitePaletteColor,
  focused: whitePaletteColor,
  hovered: whitePaletteColor,
  pressed: whitePaletteColor,
};

const whitePaletteColorArrangement: PaletteColorArrangement = {
  inverted: {
    contained: blackInteractivityPaletteColor,
    uncontained: blackInteractivityPaletteColor,
  },
  regular: {
    contained: whiteInteractivityPaletteColor,
    uncontained: whiteInteractivityPaletteColor,
  },
};

export const purpleTealPaletteTheme: PaletteTheme = {
  background: whitePaletteColorArrangement,
  error: whitePaletteColorArrangement,
  primary: whitePaletteColorArrangement,
  secondary: whitePaletteColorArrangement,
  success: whitePaletteColorArrangement,
  surface: whitePaletteColorArrangement,
  warning: whitePaletteColorArrangement,
};
