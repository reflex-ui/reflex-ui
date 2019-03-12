/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ButtonTheme } from '@reflex-ui/core';
import merge from 'lodash/merge';

import { animatedIconButtonContainerTheme } from './animatedContainer';
import { iconButtonTheme } from './theme';

const optionalIconAnimatedButtonTheme: Partial<ButtonTheme> = {
  container: animatedIconButtonContainerTheme,
};

export const animatedIconButtonTheme: ButtonTheme = merge<
  {},
  ButtonTheme,
  Partial<ButtonTheme>
>({}, iconButtonTheme, optionalIconAnimatedButtonTheme);
