/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ButtonTheme } from '@reflex-ui/core';
import merge from 'lodash/merge';

import { raisedButtonTheme } from '../raised/theme';
import { getFabButtonSurfaceTheme } from './container';
import { getFabButtonIconTheme } from './icon';

export const partialFabButtonTheme: Partial<ButtonTheme> = {
  getIcon: getFabButtonIconTheme,
  surface: getFabButtonSurfaceTheme,
};

export const fabButtonTheme: ButtonTheme = merge<
  {},
  ButtonTheme,
  Partial<ButtonTheme>
>({}, raisedButtonTheme, partialFabButtonTheme);
