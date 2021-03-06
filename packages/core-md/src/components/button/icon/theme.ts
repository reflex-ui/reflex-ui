/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ButtonTheme } from '@reflex-ui/core';
import merge from 'lodash/merge';

import { defaultButtonTheme } from '../default/theme';
import { getIconButtonSurfaceTheme } from './container';
import { getIconButtonIconTheme } from './icon';

export const partialIconButtonTheme: Partial<ButtonTheme> = {
  icon: getIconButtonIconTheme,
  surface: getIconButtonSurfaceTheme,
};

export const iconButtonTheme: ButtonTheme = merge<
  {},
  ButtonTheme,
  Partial<ButtonTheme>
>({}, defaultButtonTheme, partialIconButtonTheme);
