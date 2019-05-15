/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ComponentsTheme } from '@reflex-ui/core';

import { appBarVariantsTheme } from './app-bar/theme';
import { avatarTheme } from './avatar/theme';
import { animatedButtonTheme } from './button/animatedTheme';
import { listItemTheme } from './list-item/theme';
import { listTheme } from './list/theme';
import { screenTheme } from './screen/theme';
import { surfaceTheme } from './surface/theme';
import { rfxSvgVariantsTheme } from './svg/theme';
import { rfxTextVariantsTheme } from './text/theme';
// tslint:disable-next-line:max-line-length
import { animatedTouchableSurfaceVariantsTheme } from './touchable-surface/animatedTheme';
import { rfxViewTheme } from './view/theme';

export const animatedMaterialDesignTheme: ComponentsTheme = {
  appBar: appBarVariantsTheme,
  avatar: avatarTheme,
  button: animatedButtonTheme,
  list: listTheme,
  listItem: listItemTheme,
  screen: screenTheme,
  surface: surfaceTheme,
  svg: rfxSvgVariantsTheme,
  text: rfxTextVariantsTheme,
  touchableSurface: animatedTouchableSurfaceVariantsTheme,
  views: rfxViewTheme,
};
