/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { OptionalButtonTheme } from '@reflex-ui/core';
import merge from 'lodash/merge';

// tslint:disable-next-line:max-line-length
import { containedAnimatedButtonContainerTheme } from '../contained/animatedContainer';
import { containedShapedButtonTheme } from './theme';

export const partialContainedShapedAnimatedButtonTheme: OptionalButtonTheme = {
  container: containedAnimatedButtonContainerTheme,
};

export const containedShapedAnimatedButtonTheme: OptionalButtonTheme = merge<
  {},
  OptionalButtonTheme,
  OptionalButtonTheme
>({}, containedShapedButtonTheme, partialContainedShapedAnimatedButtonTheme);
