/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  OptionalTouchableSurfaceTheme,
  TouchableSurfaceTheme,
} from '@reflex-ui/core';
import merge from 'lodash/merge';

import { animatedTouchableSurfaceContainerTheme } from './animatedContainer';
import { touchableSurfaceTheme } from './theme';

// tslint:disable-next-line:max-line-length
export const partialAnimatedTouchableSurfaceTheme: OptionalTouchableSurfaceTheme = {
  container: animatedTouchableSurfaceContainerTheme,
};

export const animatedTouchableSurfaceTheme: TouchableSurfaceTheme = merge<
  {},
  TouchableSurfaceTheme,
  OptionalTouchableSurfaceTheme
>({}, touchableSurfaceTheme, partialAnimatedTouchableSurfaceTheme);
