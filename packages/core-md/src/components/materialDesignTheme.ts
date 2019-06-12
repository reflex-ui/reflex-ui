/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ComponentsTheme } from '@reflex-ui/core';

import { appBarVariantsTheme } from './app-bar/theme';
import { avatarImageTheme } from './avatar-image/theme';
import { avatarOverlaySurfaceTheme } from './avatar-overlay-surface/theme';
import { avatarTheme } from './avatar/theme';
import { backdropTheme } from './backdrop/theme';
import { buttonTheme } from './button/theme';
import { imageTheme } from './image/theme';
import { listItemTheme } from './list-item/theme';
import { listTheme } from './list/theme';
import { modalTheme } from './modal/theme';
import { overlaySurfaceTheme } from './overlay-surface/theme';
import { screenTheme } from './screen/theme';
import {
  coplanarSideSheetVariantsTheme,
  modalSheetVariantsTheme,
} from './sheet';
import { surfaceTheme } from './surface/theme';
import { rfxSvgVariantsTheme } from './svg/theme';
import { rfxTextVariantsTheme } from './text/theme';
import { touchableTheme } from './touchable/theme';
import { rfxViewTheme } from './view/theme';

export const materialDesignTheme: ComponentsTheme = {
  appBar: appBarVariantsTheme,
  avatar: avatarTheme,
  avatarImage: avatarImageTheme,
  avatarOverlaySurface: avatarOverlaySurfaceTheme,
  backdrop: backdropTheme,
  button: buttonTheme,
  coplanarSideSheet: coplanarSideSheetVariantsTheme,
  image: imageTheme,
  list: listTheme,
  listItem: listItemTheme,
  modal: modalTheme,
  modalSheet: modalSheetVariantsTheme,
  overlaySurface: overlaySurfaceTheme,
  screen: screenTheme,
  surface: surfaceTheme,
  svg: rfxSvgVariantsTheme,
  text: rfxTextVariantsTheme,
  touchable: touchableTheme,
  views: rfxViewTheme,
};
