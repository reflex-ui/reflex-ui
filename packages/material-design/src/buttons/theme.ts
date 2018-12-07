/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ButtonVariantsTheme } from '@reflex-ui/core';
import {
  containedButtonTheme,
  containedShapedButtonTheme,
  defaultButtonTheme,
  fabButtonTheme,
  iconButtonTheme,
  outlinedButtonTheme,
  outlinedShapedButtonTheme,
  raisedButtonTheme,
  xfabButtonTheme,
} from './';

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
