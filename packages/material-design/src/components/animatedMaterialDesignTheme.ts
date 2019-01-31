/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ComponentsTheme } from '@reflex-ui/core';

import { appBarVariantsTheme } from './app-bars/theme';
import { animatedButtonTheme } from './buttons/animatedTheme';
import { iconTheme } from './icons/theme';
import { listItemTheme } from './list-item/theme';
import { listTheme } from './list/theme';
import { surfaceTheme } from './surface/theme';
// tslint:disable-next-line:max-line-length
import { animatedTouchableSurfaceTheme } from './touchable-surface/animatedTheme';
import { typographyTheme } from './typography/theme';
import { superViewTheme } from './views/theme';

export const animatedMaterialDesignTheme: ComponentsTheme = {
  appBar: appBarVariantsTheme,
  button: animatedButtonTheme,
  icon: iconTheme,
  list: listTheme,
  listItem: listItemTheme,
  surface: surfaceTheme,
  touchableSurface: animatedTouchableSurfaceTheme,
  typography: typographyTheme,
  views: superViewTheme,
};
