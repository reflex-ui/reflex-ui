/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ButtonTheme } from '@reflex-ui/core';

import { getDefaultButtonSurfaceTheme } from './container';
import {
  getDefaultButtonLeadingIconTheme,
  getDefaultButtonTrailingIconTheme,
} from './sideIcons';
import { defaultButtonTextTheme } from './text';

export const defaultButtonTheme: ButtonTheme = {
  getLeadingIcon: getDefaultButtonLeadingIconTheme,
  getTrailingIcon: getDefaultButtonTrailingIconTheme,
  surface: getDefaultButtonSurfaceTheme,
  text: defaultButtonTextTheme,
};
