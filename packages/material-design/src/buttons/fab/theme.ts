/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { OptionalButtonTheme } from '@reflex-ui/core';
import merge from 'lodash/merge';

import { raisedButtonTheme } from '../raised/theme';
import { fabButtonContainerTheme } from './container';
import { fabButtonIconTheme } from './icon';

export const partialFabButtonTheme: OptionalButtonTheme = {
  container: fabButtonContainerTheme,
  icon: fabButtonIconTheme,
};

export const fabButtonTheme: OptionalButtonTheme = merge<
  {},
  OptionalButtonTheme,
  OptionalButtonTheme
>({}, raisedButtonTheme, partialFabButtonTheme);
