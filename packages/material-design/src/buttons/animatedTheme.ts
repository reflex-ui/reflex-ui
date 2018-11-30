/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { OptionalButtonVariantsTheme } from '@reflex-ui/core';
import {
  allVariantsAnimatedButtonTheme,
  containedAnimatedButtonTheme,
  containedShapedAnimatedButtonTheme,
  defaultAnimatedButtonTheme,
  fabAnimatedButtonTheme,
  iconAnimatedButtonTheme,
  outlinedAnimatedButtonTheme,
  outlinedShapedAnimatedButtonTheme,
  raisedAnimatedButtonTheme,
  xfabAnimatedButtonTheme,
} from './';

export const animatedButtonTheme: OptionalButtonVariantsTheme = {
  allVariants: allVariantsAnimatedButtonTheme,
  contained: containedAnimatedButtonTheme,
  containedShaped: containedShapedAnimatedButtonTheme,
  default: defaultAnimatedButtonTheme,
  fab: fabAnimatedButtonTheme,
  highlighted: raisedAnimatedButtonTheme,
  icon: iconAnimatedButtonTheme,
  outlined: outlinedAnimatedButtonTheme,
  outlinedShaped: outlinedShapedAnimatedButtonTheme,
  xfab: xfabAnimatedButtonTheme,
};
