/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ButtonTheme, ButtonThemeOptional } from '@reflex-ui/core';
import merge from 'lodash/merge';

import { defaultButtonTheme } from '../default/theme';
import { iconButtonContainerTheme } from './container';
import { iconButtonIconTheme } from './icon';

export const partialIconButtonTheme: ButtonThemeOptional = {
  container: iconButtonContainerTheme,
  icon: iconButtonIconTheme,
};

export const iconButtonTheme: ButtonTheme = merge<
  {},
  ButtonTheme,
  ButtonThemeOptional
>({}, defaultButtonTheme, partialIconButtonTheme);
