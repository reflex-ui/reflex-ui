/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ButtonTheme } from '@reflex-ui/core';
import merge from 'lodash/merge';

import { getAnimatedOutlinedButtonSurfaceTheme } from './animatedContainer';
import { outlinedButtonTheme } from './theme';

export const partialAnimatedOutlinedButtonTheme: Partial<ButtonTheme> = {
  surface: getAnimatedOutlinedButtonSurfaceTheme,
};

export const animatedOutlinedButtonTheme: ButtonTheme = merge<
  {},
  ButtonTheme,
  Partial<ButtonTheme>
>({}, outlinedButtonTheme, partialAnimatedOutlinedButtonTheme);
