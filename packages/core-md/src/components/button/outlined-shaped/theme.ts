/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ButtonTheme, ButtonThemeOptional } from '@reflex-ui/core';
import merge from 'lodash/merge';

import { outlinedButtonTheme } from '../outlined/theme';
import { outlinedShapedButtonContainerTheme } from './container';

export const partialOutlinedShapedButtonTheme: ButtonThemeOptional = {
  container: outlinedShapedButtonContainerTheme,
};

export const outlinedShapedButtonTheme: ButtonTheme = merge<
  {},
  ButtonTheme,
  ButtonThemeOptional
>({}, outlinedButtonTheme, partialOutlinedShapedButtonTheme);
