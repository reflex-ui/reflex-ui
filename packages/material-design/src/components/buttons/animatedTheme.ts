/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ButtonVariantsTheme } from '@reflex-ui/core';

// tslint:disable-next-line:max-line-length
import { animatedContainedShapedButtonTheme } from './contained-shaped/animatedTheme';
import { animatedContainedButtonTheme } from './contained/animatedTheme';
import { animatedDefaultButtonTheme } from './default/animatedTheme';
import { animatedFabButtonTheme } from './fab/animatedTheme';
import { animatedIconButtonTheme } from './icon/animatedTheme';
// tslint:disable-next-line:max-line-length
import { animatedOutlinedShapedButtonTheme } from './outlined-shaped/animatedTheme';
import { animatedOutlinedButtonTheme } from './outlined/animatedTheme';
import { animatedRaisedButtonTheme } from './raised/animatedTheme';
import { animatedXFabButtonTheme } from './xfab/animatedTheme';

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
