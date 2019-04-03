/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ButtonTheme } from '@reflex-ui/core';
import merge from 'lodash/merge';

import { getAnimatedRaisedButtonSurfaceTheme } from './animatedContainer';
import { raisedButtonTheme } from './theme';

export const partialAnimatedRaisedButtonTheme: Partial<ButtonTheme> = {
  surface: getAnimatedRaisedButtonSurfaceTheme,
};

export const animatedRaisedButtonTheme: ButtonTheme = merge<
  {},
  ButtonTheme,
  Partial<ButtonTheme>
>({}, raisedButtonTheme, partialAnimatedRaisedButtonTheme);
