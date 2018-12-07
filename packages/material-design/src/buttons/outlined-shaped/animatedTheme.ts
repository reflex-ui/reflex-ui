/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ButtonTheme, OptionalButtonTheme } from '@reflex-ui/core';
import merge from 'lodash/merge';

// tslint:disable-next-line:max-line-length
import { animatedOutlinedShapedButtonContainerTheme } from './animatedContainer';
import { outlinedShapedButtonTheme } from './theme';

export const partialAnimatedOutlinedShapedButtonTheme: OptionalButtonTheme = {
  container: animatedOutlinedShapedButtonContainerTheme,
};

export const animatedOutlinedShapedButtonTheme: ButtonTheme = merge<
  {},
  ButtonTheme,
  OptionalButtonTheme
>({}, outlinedShapedButtonTheme, partialAnimatedOutlinedShapedButtonTheme);
