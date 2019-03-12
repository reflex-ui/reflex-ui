/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { TouchableSurfaceTheme } from '@reflex-ui/core';
import merge from 'lodash/merge';

import { animatedTouchableSurfaceContainerTheme } from './animatedContainer';
import { touchableSurfaceTheme } from './theme';

export const partialAnimatedTouchableSurfaceTheme: Partial<
  TouchableSurfaceTheme
> = {
  container: animatedTouchableSurfaceContainerTheme,
};

export const animatedTouchableSurfaceTheme: TouchableSurfaceTheme = merge<
  {},
  TouchableSurfaceTheme,
  Partial<TouchableSurfaceTheme>
>({}, touchableSurfaceTheme, partialAnimatedTouchableSurfaceTheme);
