/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ComponentsTheme } from '@reflex-ui/core';

import { appBarVariantsTheme } from './app-bar/theme';
import { avatarImageTheme } from './avatar-image/theme';
// tslint:disable-next-line:max-line-length
import { animatedAvatarOverlaySurfaceTheme } from './avatar-overlay-surface/animatedTheme';
import { avatarTheme } from './avatar/theme';
import { animatedButtonTheme } from './button/animatedTheme';
import { imageTheme } from './image/theme';
import { listItemTheme } from './list-item/theme';
import { listTheme } from './list/theme';
import { animatedOverlaySurfaceTheme } from './overlay-surface/animatedTheme';
import { screenTheme } from './screen/theme';
import { animatedSurfaceTheme } from './surface/animatedTheme';
import { rfxSvgVariantsTheme } from './svg/theme';
import { rfxTextVariantsTheme } from './text/theme';
// tslint:disable-next-line:max-line-length
import { animatedTouchableSurfaceVariantsTheme } from './touchable-surface/animatedTheme';
import { touchableTheme } from './touchable/theme';
import { rfxViewTheme } from './view/theme';

export const animatedMaterialDesignTheme: ComponentsTheme = {
  appBar: appBarVariantsTheme,
  avatar: avatarTheme,
  avatarImage: avatarImageTheme,
  avatarOverlaySurface: animatedAvatarOverlaySurfaceTheme,
  button: animatedButtonTheme,
  image: imageTheme,
  list: listTheme,
  listItem: listItemTheme,
  overlaySurface: animatedOverlaySurfaceTheme,
  screen: screenTheme,
  surface: animatedSurfaceTheme,
  svg: rfxSvgVariantsTheme,
  text: rfxTextVariantsTheme,
  touchable: touchableTheme,
  touchableSurface: animatedTouchableSurfaceVariantsTheme,
  views: rfxViewTheme,
};
