/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ButtonTheme, OptionalButtonTheme } from '@reflex-ui/core';
import merge from 'lodash/merge';

import { animatedXFabButtonContainerTheme } from './animatedContainer';
import { xfabButtonTheme } from './theme';

export const partialAnimatedXFabButtonTheme: OptionalButtonTheme = {
  container: animatedXFabButtonContainerTheme,
};

export const animatedXFabButtonTheme: ButtonTheme = merge<
  {},
  ButtonTheme,
  OptionalButtonTheme
>({}, xfabButtonTheme, partialAnimatedXFabButtonTheme);
