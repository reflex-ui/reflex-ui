/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Palette } from '@reflex-ui/core';

import { mdBlackBackdrop } from '../colors/black/mdBlackBackdrop';
import {
  mdGreen800,
  mdGreen800Dark,
  mdGreen800Light,
} from '../colors/green/mdGreen800';
import { mdRed900, mdRed900Dark, mdRed900Light } from '../colors/red/mdRed900';
import { mdWhite } from '../colors/white/mdWhite';
import {
  mdYellow600,
  mdYellow600Dark,
  mdYellow600Light,
} from '../colors/yellow/mdYellow600';

export const defaultPalette: Palette = {
  backdrop: mdBlackBackdrop,
  error: mdRed900,
  errorDark: mdRed900Dark,
  errorLight: mdRed900Light,
  primary: mdWhite,
  primaryDark: mdWhite,
  primaryLight: mdWhite,
  screen: mdWhite,
  screenDark: mdWhite,
  screenLight: mdWhite,
  secondary: mdWhite,
  secondaryDark: mdWhite,
  secondaryLight: mdWhite,
  success: mdGreen800,
  successDark: mdGreen800Dark,
  successLight: mdGreen800Light,
  surface: mdWhite,
  surfaceDark: mdWhite,
  surfaceLight: mdWhite,
  warning: mdYellow600,
  warningDark: mdYellow600Dark,
  warningLight: mdYellow600Light,
};
