/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ComponentsTheme } from '@reflex-ui/core';

import { appBarVariantsTheme } from './app-bars/theme';
import { buttonTheme } from './buttons/theme';
import { iconTheme } from './icons/theme';
import { listItemTheme } from './list-item/theme';
import { listTheme } from './list/theme';
import { surfaceTheme } from './surface/theme';
import { touchableSurfaceTheme } from './touchable-surface/theme';
import { typographyTheme } from './typography/theme';
import { superViewTheme } from './views/theme';

export const materialDesignTheme: ComponentsTheme = {
  appBar: appBarVariantsTheme,
  button: buttonTheme,
  icon: iconTheme,
  list: listTheme,
  listItem: listItemTheme,
  surface: surfaceTheme,
  touchableSurface: touchableSurfaceTheme,
  typography: typographyTheme,
  views: superViewTheme,
};
