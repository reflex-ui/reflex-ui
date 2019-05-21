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

import { getSurfaceContainerProps } from '../surface/theme';
import { getListItemContainerStyle } from './theme';

const AnimatedRippleView = createAnimatedRippleView<SurfaceProps, SurfaceTheme>(
  getSurfaceRippleColor,
);

export const getAnimatedListItemStyle: ViewStyleGetter<
  SurfaceProps
> = props => ({
  ...getListItemContainerStyle(props),
  backgroundColor: getColor(suppressPressedState(props)),
});

export const animatedListItemTheme: SurfaceTheme = {
  getComponent: props =>
    props.isTouchableHandler ? AnimatedRippleView : undefined,
  getProps: getSurfaceContainerProps,
  getStyle: getAnimatedListItemStyle,
};
