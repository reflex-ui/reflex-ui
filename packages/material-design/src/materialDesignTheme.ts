/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ComponentsTheme } from '@reflex-ui/core';

import { appBarTheme } from './app-bars/appBarTheme';
import { buttonTheme } from './buttons/theme';
import { iconTheme } from './icons/iconTheme';
import { surfaceTheme } from './surface/theme';
import { typographyTheme } from './typography/typographyTheme';

export const materialDesignTheme: ComponentsTheme = {
  appBar: appBarTheme,
  button: buttonTheme,
  icon: iconTheme,
  surface: surfaceTheme,
  typography: typographyTheme,
};
