/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { OptionalButtonTheme } from '@reflex-ui/core';
import merge from 'lodash/merge';

import { containedAnimatedButtonContainerTheme } from './animatedContainer';
import { containedButtonTheme } from './theme';

export const partialContainedAnimatedButtonTheme: OptionalButtonTheme = {
  container: containedAnimatedButtonContainerTheme,
};

export const containedAnimatedButtonTheme: OptionalButtonTheme = merge<
  {},
  OptionalButtonTheme,
  OptionalButtonTheme
>({}, containedButtonTheme, partialContainedAnimatedButtonTheme);
