/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import merge from 'lodash/merge';

import { ComponentsTheme, ComponentsThemeOptional } from './ComponentsTheme';
import { rawComponentsTheme } from './raw/rawComponentsTheme';

export const createComponentsTheme = (
  theme: ComponentsThemeOptional,
): ComponentsTheme => merge({}, rawComponentsTheme, theme);
