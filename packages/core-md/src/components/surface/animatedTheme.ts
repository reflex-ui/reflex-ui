/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  getColor,
  suppressPressedState,
  SurfaceProps,
  SurfaceTheme,
  ViewStyleGetter,
} from '@reflex-ui/core';
import {
  createAnimatedRippleView,
  getSurfaceRippleColor,
} from '@reflex-ui/ripple-md';

import { getSurfaceContainerProps, getSurfaceContainerStyle } from './theme';

const AnimatedRippleView = createAnimatedRippleView<SurfaceProps, SurfaceTheme>(
  getSurfaceRippleColor,
);

export const getAnimatedSurfaceContainerStyle: ViewStyleGetter<
  SurfaceProps
> = props => ({
  ...getSurfaceContainerStyle(props),
  backgroundColor: getColor(suppressPressedState(props)),
});

export const animatedSurfaceTheme: SurfaceTheme = {
  getComponent: props =>
    props.isTouchableHandler ? AnimatedRippleView : undefined,
  getProps: getSurfaceContainerProps,
  getStyle: getAnimatedSurfaceContainerStyle,
};
