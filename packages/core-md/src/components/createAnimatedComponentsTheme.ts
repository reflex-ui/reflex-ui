/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ComponentsTheme,
  createComponentsTheme as createComponentsThemeCore,
  OptionalComponentsTheme,
} from '@reflex-ui/core';
import merge from 'lodash/merge';
import { animatedMaterialDesignTheme } from './animatedMaterialDesignTheme';

export const createAnimatedComponentsTheme = (
  theme: OptionalComponentsTheme = {},
): ComponentsTheme =>
  createComponentsThemeCore(merge({}, animatedMaterialDesignTheme, theme));
