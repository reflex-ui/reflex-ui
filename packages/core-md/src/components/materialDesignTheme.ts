/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ComponentsTheme } from '@reflex-ui/core';

import { appBarVariantsTheme } from './app-bar/theme';
import { avatarImageTheme } from './avatar-image/theme';
import { avatarTheme } from './avatar/theme';
import { buttonTheme } from './button/theme';
import { imageTheme } from './image/theme';
import { listItemTheme } from './list-item/theme';
import { listTheme } from './list/theme';
import { overlaySurfaceTheme } from './overlay-surface/theme';
import { screenTheme } from './screen/theme';
import { surfaceTheme } from './surface/theme';
import { rfxSvgVariantsTheme } from './svg/theme';
import { rfxTextVariantsTheme } from './text/theme';
import { touchableSurfaceVariantsTheme } from './touchable-surface/theme';
import { touchableTheme } from './touchable/theme';
import { rfxViewTheme } from './view/theme';

export const materialDesignTheme: ComponentsTheme = {
  appBar: appBarVariantsTheme,
  avatar: avatarTheme,
  avatarImage: avatarImageTheme,
  button: buttonTheme,
  image: imageTheme,
  list: listTheme,
  listItem: listItemTheme,
  overlaySurface: overlaySurfaceTheme,
  screen: screenTheme,
  surface: surfaceTheme,
  svg: rfxSvgVariantsTheme,
  text: rfxTextVariantsTheme,
  touchable: touchableTheme,
  touchableSurface: touchableSurfaceVariantsTheme,
  views: rfxViewTheme,
};
