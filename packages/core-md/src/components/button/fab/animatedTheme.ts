/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ButtonTheme } from '@reflex-ui/core';
import merge from 'lodash/merge';

import { animatedFabButtonContainerTheme } from './animatedContainer';
import { fabButtonTheme } from './theme';

export const partialAnimatedFabButtonTheme: Partial<ButtonTheme> = {
  container: animatedFabButtonContainerTheme,
};

export const animatedFabButtonTheme: ButtonTheme = merge<
  {},
  ButtonTheme,
  Partial<ButtonTheme>
>({}, fabButtonTheme, partialAnimatedFabButtonTheme);
