/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PaletteColor } from './PaletteColor';
import { PaletteColorArrangement } from './PaletteColorArrangement';
import { PaletteColorInteraction } from './PaletteColorInteraction';
import { PaletteTheme } from './PaletteTheme';

const black = '#000';
const transparent = 'transparent';
const white = '#fff';

const disabledContainedPaletteColor: PaletteColor = {
  dark: {
    color: '#e0e0e0',
    onColor: '#9e9e9e',
  },
  light: {
    color: '#e0e0e0',
    onColor: '#9e9e9e',
  },
  normal: {
    color: '#e0e0e0',
    onColor: '#9e9e9e',
  },
};

const disabledUncontainedPaletteColor: PaletteColor = {
  dark: {
    color: transparent,
    onColor: '#9e9e9e',
  },
  light: {
    color: transparent,
    onColor: '#9e9e9e',
  },
  normal: {
    color: transparent,
    onColor: '#9e9e9e',
  },
};

const whiteRegularContainedColorInteraction: PaletteColorInteraction = {
  activated: {
    dark: { color: '#e0e0e0', onColor: black },
    light: { color: '#e0e0e0', onColor: black },
    normal: { color: '#e0e0e0', onColor: black },
  },
  disabled: disabledContainedPaletteColor,
  enabled: {
    dark: { color: white, onColor: black },
    light: { color: white, onColor: black },
    normal: { color: white, onColor: black },
  },
  focused: {
    dark: { color: '#e0e0e0', onColor: black },
    light: { color: '#e0e0e0', onColor: black },
    normal: { color: '#e0e0e0', onColor: black },
  },
  hovered: {
    dark: { color: '#f5f5f5', onColor: black },
    light: { color: '#f5f5f5', onColor: black },
    normal: { color: '#f5f5f5', onColor: black },
  },
  pressed: {
    dark: { color: '#d6d6d6', onColor: black },
    light: { color: '#d6d6d6', onColor: black },
    normal: { color: '#d6d6d6', onColor: black },
  },
};

const whiteRegularUncontainedColorInteraction: PaletteColorInteraction = {
  activated: {
    dark: { color: '#e0e0e0', onColor: white },
    light: { color: '#e0e0e0', onColor: white },
    normal: { color: '#e0e0e0', onColor: white },
  },
  disabled: disabledUncontainedPaletteColor,
  enabled: {
    dark: { color: transparent, onColor: white },
    light: { color: transparent, onColor: white },
    normal: { color: transparent, onColor: white },
  },
  focused: {
    dark: { color: '#e0e0e0', onColor: white },
    light: { color: '#e0e0e0', onColor: white },
    normal: { color: '#e0e0e0', onColor: white },
  },
  hovered: {
    dark: { color: '#f5f5f5', onColor: white },
    light: { color: '#f5f5f5', onColor: white },
    normal: { color: '#f5f5f5', onColor: white },
  },
  pressed: {
    dark: { color: '#d6d6d6', onColor: white },
    light: { color: '#d6d6d6', onColor: white },
    normal: { color: '#d6d6d6', onColor: white },
  },
};

const whiteInvertedContainedColorInteraction: PaletteColorInteraction = {
  activated: {
    dark: { color: '#5c5c5c', onColor: white },
    light: { color: '#5c5c5c', onColor: white },
    normal: { color: '#5c5c5c', onColor: white },
  },
  disabled: disabledContainedPaletteColor,
  enabled: {
    dark: { color: black, onColor: white },
    light: { color: black, onColor: white },
    normal: { color: black, onColor: white },
  },
  focused: {
    dark: { color: '#5c5c5c', onColor: white },
    light: { color: '#5c5c5c', onColor: white },
    normal: { color: '#5c5c5c', onColor: white },
  },
  hovered: {
    dark: { color: '#292929', onColor: white },
    light: { color: '#292929', onColor: white },
    normal: { color: '#292929', onColor: white },
  },
  pressed: {
    dark: { color: '#6b6b6b', onColor: white },
    light: { color: '#6b6b6b', onColor: white },
    normal: { color: '#6b6b6b', onColor: white },
  },
};

const whiteInvertedUncontainedColorInteraction: PaletteColorInteraction = {
  activated: {
    dark: { color: '#cfcfcf', onColor: black },
    light: { color: '#cfcfcf', onColor: black },
    normal: { color: '#cfcfcf', onColor: black },
  },
  disabled: disabledUncontainedPaletteColor,
  enabled: {
    dark: { color: transparent, onColor: black },
    light: { color: transparent, onColor: black },
    normal: { color: transparent, onColor: black },
  },
  focused: {
    dark: { color: '#cfcfcf', onColor: black },
    light: { color: '#cfcfcf', onColor: black },
    normal: { color: '#cfcfcf', onColor: black },
  },
  hovered: {
    dark: { color: '#dbdbdb', onColor: black },
    light: { color: '#dbdbdb', onColor: black },
    normal: { color: '#dbdbdb', onColor: black },
  },
  pressed: {
    dark: { color: '#bababa', onColor: black },
    light: { color: '#bababa', onColor: black },
    normal: { color: '#bababa', onColor: black },
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

export const defaultPaletteTheme: PaletteTheme = {
  background: whitePaletteColorArrangement,
  error: whitePaletteColorArrangement,
  primary: whitePaletteColorArrangement,
  secondary: whitePaletteColorArrangement,
  success: whitePaletteColorArrangement,
  surface: whitePaletteColorArrangement,
  warning: whitePaletteColorArrangement,
};
