/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ButtonTheme } from '@reflex-ui/core';
import merge from 'lodash/merge';

// tslint:disable-next-line:max-line-length
import { getAnimatedOutlinedShapedButtonSurfaceTheme } from './animatedContainer';
import { outlinedShapedButtonTheme } from './theme';

export const partialAnimatedOutlinedShapedButtonTheme: Partial<ButtonTheme> = {
  surface: getAnimatedOutlinedShapedButtonSurfaceTheme,
};

export const animatedOutlinedShapedButtonTheme: ButtonTheme = merge<
  {},
  ButtonTheme,
  Partial<ButtonTheme>
>({}, outlinedShapedButtonTheme, partialAnimatedOutlinedShapedButtonTheme);
