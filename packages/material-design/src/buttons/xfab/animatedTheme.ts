/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { OptionalButtonTheme } from '@reflex-ui/core';
import merge from 'lodash/merge';

import { fabAnimatedButtonContainerTheme } from '../fab/animatedContainer';
import { xfabButtonTheme } from './theme';

export const partialXFabAnimatedButtonTheme: OptionalButtonTheme = {
  container: fabAnimatedButtonContainerTheme,
};

export const xfabAnimatedButtonTheme: OptionalButtonTheme = merge<
  {},
  OptionalButtonTheme,
  OptionalButtonTheme
>({}, xfabButtonTheme, partialXFabAnimatedButtonTheme);
