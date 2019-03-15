/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ButtonTheme } from '@reflex-ui/core';
import merge from 'lodash/merge';

import { containedButtonTheme } from '../contained/theme';
import {
  getDefaultButtonLeadingIconTheme,
  getDefaultButtonTrailingIconTheme,
} from '../default/sideIcons';
import { outlinedButtonContainerTheme } from './container';
import { outlinedButtonTextTheme } from './text';

export const partialOutlinedButtonTheme: Partial<ButtonTheme> = {
  container: outlinedButtonContainerTheme,
  getLeadingIcon: getDefaultButtonLeadingIconTheme,
  getTrailingIcon: getDefaultButtonTrailingIconTheme,
  text: outlinedButtonTextTheme,
};

export const outlinedButtonTheme: ButtonTheme = merge<
  {},
  ButtonTheme,
  Partial<ButtonTheme>
>({}, containedButtonTheme, partialOutlinedButtonTheme);
