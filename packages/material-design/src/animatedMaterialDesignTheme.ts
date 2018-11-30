/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { OptionalComponentsTheme } from '@reflex-ui/core';

import { animatedButtonTheme } from './buttons/animatedTheme';
import { iconTheme } from './icons/iconTheme';
import { typographyTheme } from './typography/typographyTheme';

export const animatedMaterialDesignTheme: OptionalComponentsTheme = {
  button: animatedButtonTheme,
  icon: iconTheme,
  typography: typographyTheme,
};
