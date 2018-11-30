/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { OptionalButtonTheme } from '@reflex-ui/core';
import merge from 'lodash/merge';

import { containedButtonTheme } from '../contained/theme';
import { containedShapedButtonContainerTheme } from './container';

const partialContainedShapedButtonTheme: OptionalButtonTheme = {
  container: containedShapedButtonContainerTheme,
};

// tslint:disable-next-line:max-line-length
export const containedShapedButtonTheme: OptionalButtonTheme = merge<
  {},
  OptionalButtonTheme,
  OptionalButtonTheme
>({}, containedButtonTheme, partialContainedShapedButtonTheme);
