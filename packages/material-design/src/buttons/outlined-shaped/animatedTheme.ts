/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { OptionalButtonTheme } from '@reflex-ui/core';
import merge from 'lodash/merge';

// tslint:disable-next-line:max-line-length
import { outlinedAnimatedButtonContainerTheme } from '../outlined/animatedContainer';
import { outlinedShapedButtonTheme } from './theme';

export const partialOutlinedShapedAnimatedButtonTheme: OptionalButtonTheme = {
  container: outlinedAnimatedButtonContainerTheme,
};

export const outlinedShapedAnimatedButtonTheme: OptionalButtonTheme = merge<
  {},
  OptionalButtonTheme,
  OptionalButtonTheme
>({}, outlinedShapedButtonTheme, partialOutlinedShapedAnimatedButtonTheme);
