/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ComponentsTheme } from '@reflex-ui/core';

import { appBarVariantsTheme } from './app-bar/theme';
import { buttonTheme } from './button/theme';
import { listItemTheme } from './list-item/theme';
import { listTheme } from './list/theme';
import { surfaceTheme } from './surface/theme';
import { flexSvgVariantsTheme } from './svg/theme';
import { touchableSurfaceTheme } from './touchable-surface/theme';
import { typographyTheme } from './typography/theme';
import { superViewTheme } from './view/theme';

export const materialDesignTheme: ComponentsTheme = {
  appBar: appBarVariantsTheme,
  button: buttonTheme,
  list: listTheme,
  listItem: listItemTheme,
  surface: surfaceTheme,
  svg: flexSvgVariantsTheme,
  touchableSurface: touchableSurfaceTheme,
  typography: typographyTheme,
  views: superViewTheme,
};
