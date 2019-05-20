/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  getColor,
  OverlaySurfaceProps,
  OverlaySurfaceTheme,
  suppressPressedState,
  ViewStyleGetter,
} from '@reflex-ui/core';
import {
  createAnimatedRippleView,
  getSurfaceRippleColor,
} from '@reflex-ui/ripple-md';

import {
  getOverlaySurfaceContainerProps,
  getOverlaySurfaceContainerStyle,
} from './theme';

const AnimatedRippleView = createAnimatedRippleView<
  OverlaySurfaceProps,
  OverlaySurfaceTheme
>(getSurfaceRippleColor);

export const getAnimatedOverlaySurfaceContainerStyle: ViewStyleGetter<
  OverlaySurfaceProps
> = props => ({
  ...getOverlaySurfaceContainerStyle(props),
  backgroundColor: getColor(suppressPressedState(props)),
});

export const animatedOverlaySurfaceTheme: OverlaySurfaceTheme = {
  surface: {
    getComponent: props =>
      props.isTouchableHandler ? AnimatedRippleView : undefined,
    getProps: getOverlaySurfaceContainerProps,
    getStyle: getAnimatedOverlaySurfaceContainerStyle,
  },
};
