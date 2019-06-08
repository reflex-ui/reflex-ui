/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  getColor,
  OverlaySurfaceTheme,
  suppressPressedState,
  SurfaceProps,
  SurfaceTheme,
  ViewStyleGetter,
} from '@reflex-ui/core';
import {
  createAnimatedRippleView,
  getSurfaceRippleColor,
} from '@reflex-ui/ripple-md';

import {
  getAvatarOverlaySurfaceContainerProps,
  getAvatarOverlaySurfaceContainerStyle,
} from './theme';

const AnimatedRippleView = createAnimatedRippleView<SurfaceProps, SurfaceTheme>(
  getSurfaceRippleColor,
);

export const getAnimatedAvatarOverlaySurfaceContainerStyle: ViewStyleGetter<
  SurfaceProps
> = props => ({
  ...getAvatarOverlaySurfaceContainerStyle(props),
  backgroundColor: getColor(suppressPressedState(props)),
});

export const animatedAvatarOverlaySurfaceTheme: OverlaySurfaceTheme = {
  surface: () => ({
    view: {
      getComponent: props =>
        props.isTouchableHandler ? AnimatedRippleView : undefined,
      getProps: getAvatarOverlaySurfaceContainerProps,
      getStyle: getAnimatedAvatarOverlaySurfaceContainerStyle,
    },
  }),
};
