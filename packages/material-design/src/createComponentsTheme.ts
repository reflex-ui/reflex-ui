/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ComponentsTheme,
  createComponentsTheme as createThemeCore,
  OptionalComponentsTheme,
} from '@reflex-ui/core';
import merge from 'lodash/merge';
import { materialDesignTheme } from './materialDesignTheme';

export const createComponentsTheme = (
  theme: OptionalComponentsTheme = {},
): ComponentsTheme => createThemeCore(merge(materialDesignTheme, theme));
