/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ButtonVariantsTheme } from '@reflex-ui/core';
import {
  animatedContainedButtonTheme,
  animatedContainedShapedButtonTheme,
  animatedDefaultButtonTheme,
  animatedFabButtonTheme,
  animatedIconButtonTheme,
  animatedOutlinedButtonTheme,
  animatedOutlinedShapedButtonTheme,
  animatedRaisedButtonTheme,
  animatedXFabButtonTheme,
} from './';

export const animatedButtonTheme: ButtonVariantsTheme = {
  contained: animatedContainedButtonTheme,
  containedShaped: animatedContainedShapedButtonTheme,
  default: animatedDefaultButtonTheme,
  fab: animatedFabButtonTheme,
  highlighted: animatedRaisedButtonTheme,
  icon: animatedIconButtonTheme,
  outlined: animatedOutlinedButtonTheme,
  outlinedShaped: animatedOutlinedShapedButtonTheme,
  xfab: animatedXFabButtonTheme,
};
