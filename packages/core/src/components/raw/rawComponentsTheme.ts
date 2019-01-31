/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { rawAppBarVariantsTheme } from '../app-bars/rawAppBarTheme';
import { rawButtonTheme } from '../buttons/rawButtonTheme';
import { ComponentsTheme } from '../ComponentsTheme';
import { rawSuperIconTheme } from '../icons/rawSuperIconTheme';
import { rawListItemTheme } from '../list-item/rawListItemTheme';
import { rawListTheme } from '../list/rawListTheme';
import { rawSurfaceTheme } from '../surface/rawSurfaceTheme';
// tslint:disable-next-line:max-line-length
import { rawTouchableSurfaceTheme } from '../touchable-surface/rawTouchableSurfaceTheme';
import { rawTypographyTheme } from '../typography/rawTypographyTheme';
import { rawSuperViewVariantsTheme } from '../views/rawSuperViewTheme';

export const rawComponentsTheme: ComponentsTheme = {
  appBar: rawAppBarVariantsTheme,
  button: rawButtonTheme,
  icon: rawSuperIconTheme,
  list: rawListTheme,
  listItem: rawListItemTheme,
  surface: rawSurfaceTheme,
  touchableSurface: rawTouchableSurfaceTheme,
  typography: rawTypographyTheme,
  views: rawSuperViewVariantsTheme,
};
