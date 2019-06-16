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
import { animatedBackdropTheme } from './backdrop/animatedTheme';
import { animatedButtonTheme } from './button/animatedTheme';
import { imageTheme } from './image/theme';
import { animatedListItemTheme } from './list-item/animatedTheme';
import { listTheme } from './list/theme';
import { animatedModalTheme } from './modal/animatedTheme';
import { animatedOverlaySurfaceTheme } from './overlay-surface/animatedTheme';
import { screenTheme } from './screen/theme';
import {
  animatedCoplanarSheetVariantsTheme,
  animatedModalSheetVariantsTheme,
} from './sheet';
import { animatedSurfaceTheme } from './surface/animatedTheme';
import { rfxSvgVariantsTheme } from './svg/theme';
import { rfxTextVariantsTheme } from './text/theme';
import { touchableTheme } from './touchable/theme';
import { rfxViewTheme } from './view/theme';

export const animatedMaterialDesignTheme: ComponentsTheme = {
  appBar: appBarVariantsTheme,
  avatar: avatarTheme,
  avatarImage: avatarImageTheme,
  avatarOverlaySurface: animatedAvatarOverlaySurfaceTheme,
  backdrop: animatedBackdropTheme,
  button: animatedButtonTheme,
  coplanarSheet: animatedCoplanarSheetVariantsTheme,
  image: imageTheme,
  list: listTheme,
  listItem: animatedListItemTheme,
  modal: animatedModalTheme,
  modalSheet: animatedModalSheetVariantsTheme,
  overlaySurface: animatedOverlaySurfaceTheme,
  screen: screenTheme,
  surface: animatedSurfaceTheme,
  svg: rfxSvgVariantsTheme,
  text: rfxTextVariantsTheme,
  touchable: touchableTheme,
  views: rfxViewTheme,
};
