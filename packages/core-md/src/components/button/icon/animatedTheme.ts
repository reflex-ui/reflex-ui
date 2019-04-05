/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ButtonTheme } from '@reflex-ui/core';
import merge from 'lodash/merge';

import { getAnimatedIconButtonSurfaceTheme } from './animatedContainer';
import { iconButtonTheme } from './theme';

const optionalIconAnimatedButtonTheme: Partial<ButtonTheme> = {
  surface: getAnimatedIconButtonSurfaceTheme,
};

export const animatedIconButtonTheme: ButtonTheme = merge<
  {},
  ButtonTheme,
  Partial<ButtonTheme>
>({}, iconButtonTheme, optionalIconAnimatedButtonTheme);
