/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ButtonTheme, ButtonThemeOptional } from '@reflex-ui/core';
import merge from 'lodash/merge';

import { animatedOutlinedButtonContainerTheme } from './animatedContainer';
import { outlinedButtonTheme } from './theme';

export const partialAnimatedOutlinedButtonTheme: ButtonThemeOptional = {
  container: animatedOutlinedButtonContainerTheme,
};

export const animatedOutlinedButtonTheme: ButtonTheme = merge<
  {},
  ButtonTheme,
  ButtonThemeOptional
>({}, outlinedButtonTheme, partialAnimatedOutlinedButtonTheme);
