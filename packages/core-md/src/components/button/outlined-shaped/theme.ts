/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ButtonTheme } from '@reflex-ui/core';
import merge from 'lodash/merge';

import { outlinedButtonTheme } from '../outlined/theme';
import { getOutlinedShapedButtonSurfaceTheme } from './container';

export const partialOutlinedShapedButtonTheme: Partial<ButtonTheme> = {
  surface: getOutlinedShapedButtonSurfaceTheme,
};

export const outlinedShapedButtonTheme: ButtonTheme = merge<
  {},
  ButtonTheme,
  Partial<ButtonTheme>
>({}, outlinedButtonTheme, partialOutlinedShapedButtonTheme);
