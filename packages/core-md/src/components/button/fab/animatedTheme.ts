/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ButtonTheme, OptionalButtonTheme } from '@reflex-ui/core';
import merge from 'lodash/merge';

import { animatedFabButtonContainerTheme } from './animatedContainer';
import { fabButtonTheme } from './theme';

export const partialAnimatedFabButtonTheme: OptionalButtonTheme = {
  container: animatedFabButtonContainerTheme,
};

export const animatedFabButtonTheme: ButtonTheme = merge<
  {},
  ButtonTheme,
  OptionalButtonTheme
>({}, fabButtonTheme, partialAnimatedFabButtonTheme);
