/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ComponentsTheme } from '@reflex-ui/core';

import { buttonTheme } from './buttons/theme';
import { iconTheme } from './icons/iconTheme';
import { typographyTheme } from './typography/typographyTheme';

export const materialDesignTheme: ComponentsTheme = {
  button: buttonTheme,
  icon: iconTheme,
  typography: typographyTheme,
};
