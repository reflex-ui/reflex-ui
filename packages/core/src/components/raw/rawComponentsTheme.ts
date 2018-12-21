/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { rawAppBarTheme } from '../app-bars/rawAppBarTheme';
import { rawButtonTheme } from '../buttons/rawButtonTheme';
import { ComponentsTheme } from '../ComponentsTheme';
import { rawSuperIconTheme } from '../icons/rawSuperIconTheme';
import { rawSurfaceTheme } from '../surface/rawSurfaceTheme';
import { rawTypographyTheme } from '../typography/rawTypographyTheme';
import { rawSuperViewVariantsTheme } from '../views/rawSuperViewTheme';

export const rawComponentsTheme: ComponentsTheme = {
  appBar: rawAppBarTheme,
  button: rawButtonTheme,
  icon: rawSuperIconTheme,
  surface: rawSurfaceTheme,
  typography: rawTypographyTheme,
  views: rawSuperViewVariantsTheme,
};
