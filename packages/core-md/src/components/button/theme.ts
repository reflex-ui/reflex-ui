/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ButtonVariantsTheme } from '@reflex-ui/core';

import { containedShapedButtonTheme } from './contained-shaped/theme';
import { containedButtonTheme } from './contained/theme';
import { defaultButtonTheme } from './default/theme';
import { fabButtonTheme } from './fab/theme';
import { iconButtonTheme } from './icon/theme';
import { outlinedShapedButtonTheme } from './outlined-shaped/theme';
import { outlinedButtonTheme } from './outlined/theme';
import { raisedButtonTheme } from './raised/theme';
import { xfabButtonTheme } from './xfab/theme';

export const buttonTheme: ButtonVariantsTheme = {
  contained: containedButtonTheme,
  containedShaped: containedShapedButtonTheme,
  default: defaultButtonTheme,
  fab: fabButtonTheme,
  highlighted: raisedButtonTheme,
  icon: iconButtonTheme,
  outlined: outlinedButtonTheme,
  outlinedShaped: outlinedShapedButtonTheme,
  xfab: xfabButtonTheme,
};
