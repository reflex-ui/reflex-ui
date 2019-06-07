/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  OverlaySurfaceTheme,
  Size,
  SurfaceProps,
  ViewPropsGetter,
  ViewStyleGetter,
} from '@reflex-ui/core';

import { avatarSizedStyle } from '../avatar/theme';
import {
  getOverlaySurfaceContainerProps,
  getOverlaySurfaceContainerStyle,
} from '../overlay-surface/theme';

export const getAvatarOverlaySurfaceContainerProps: ViewPropsGetter<
  SurfaceProps
> = props => getOverlaySurfaceContainerProps(props);

export const getAvatarOverlaySurfaceContainerStyle: ViewStyleGetter<
  SurfaceProps
> = props => ({
  ...getOverlaySurfaceContainerStyle(props),
  ...avatarSizedStyle[props.size || Size.M],
});

export const avatarOverlaySurfaceTheme: OverlaySurfaceTheme = {
  surface: () => ({
    getProps: getAvatarOverlaySurfaceContainerProps,
    getStyle: getAvatarOverlaySurfaceContainerStyle,
  }),
};
