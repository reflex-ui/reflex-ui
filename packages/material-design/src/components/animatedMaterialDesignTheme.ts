/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { OptionalComponentsTheme } from '@reflex-ui/core';

import { appBarTheme } from './app-bars/appBarTheme';
import { animatedButtonTheme } from './buttons/animatedTheme';
import { iconTheme } from './icons/iconTheme';
import { surfaceTheme } from './surface/theme';
import { typographyTheme } from './typography/typographyTheme';
import { superViewTheme } from './views/theme';

export const animatedMaterialDesignTheme: OptionalComponentsTheme = {
  appBar: appBarTheme,
  button: animatedButtonTheme,
  icon: iconTheme,
  surface: surfaceTheme,
  typography: typographyTheme,
  views: superViewTheme,
};
