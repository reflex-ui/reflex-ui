/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ButtonTheme, OptionalButtonTheme } from '@reflex-ui/core';
import merge from 'lodash/merge';

import { containedButtonTheme } from '../contained/theme';
import { raisedButtonContainerTheme } from './container';

export const partialRaisedButtonTheme: OptionalButtonTheme = {
  container: raisedButtonContainerTheme,
};

export const raisedButtonTheme: ButtonTheme = merge<
  {},
  ButtonTheme,
  OptionalButtonTheme
>({}, containedButtonTheme, partialRaisedButtonTheme);
