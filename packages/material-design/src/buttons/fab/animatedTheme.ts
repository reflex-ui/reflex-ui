/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { OptionalButtonTheme } from '@reflex-ui/core';
import merge from 'lodash/merge';

import { fabAnimatedButtonContainerTheme } from './animatedContainer';
import { fabButtonTheme } from './theme';

export const partialAnimatedFabButtonTheme: OptionalButtonTheme = {
  container: fabAnimatedButtonContainerTheme,
};

export const fabAnimatedButtonTheme: OptionalButtonTheme = merge<
  {},
  OptionalButtonTheme,
  OptionalButtonTheme
>({}, fabButtonTheme, partialAnimatedFabButtonTheme);
