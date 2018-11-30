/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { OptionalButtonTheme } from '@reflex-ui/core';
import merge from 'lodash/merge';

import { outlinedAnimatedButtonContainerTheme } from './animatedContainer';
import { outlinedButtonTheme } from './theme';

export const partialOutlinedAnimatedButtonTheme: OptionalButtonTheme = {
  container: outlinedAnimatedButtonContainerTheme,
};

export const outlinedAnimatedButtonTheme: OptionalButtonTheme = merge<
  {},
  OptionalButtonTheme,
  OptionalButtonTheme
>({}, outlinedButtonTheme, partialOutlinedAnimatedButtonTheme);
