/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ButtonTheme, ButtonThemeOptional } from '@reflex-ui/core';
import merge from 'lodash/merge';

import { animatedRaisedButtonContainerTheme } from './animatedContainer';
import { raisedButtonTheme } from './theme';

export const partialAnimatedRaisedButtonTheme: ButtonThemeOptional = {
  container: animatedRaisedButtonContainerTheme,
};

export const animatedRaisedButtonTheme: ButtonTheme = merge<
  {},
  ButtonTheme,
  ButtonThemeOptional
>({}, raisedButtonTheme, partialAnimatedRaisedButtonTheme);
