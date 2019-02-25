/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ButtonTheme, ButtonThemeOptional } from '@reflex-ui/core';
import merge from 'lodash/merge';

import { containedButtonTheme } from '../contained/theme';
import { raisedButtonContainerTheme } from './container';

export const partialRaisedButtonTheme: ButtonThemeOptional = {
  container: raisedButtonContainerTheme,
};

export const raisedButtonTheme: ButtonTheme = merge<
  {},
  ButtonTheme,
  ButtonThemeOptional
>({}, containedButtonTheme, partialRaisedButtonTheme);
