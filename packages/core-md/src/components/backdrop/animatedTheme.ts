/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  BackdropTheme,
  SurfaceProps,
  SurfaceTheme,
  ViewStyleGetter,
} from '@reflex-ui/core';
import { UseSpringProps } from 'react-spring';

import { createAnimatedOpenCloseTransitionSurface } from '../surface';
import { getBackdropSurfaceProps, getBackdropSurfaceStyle } from './theme';

const animationConfig = { clamp: true, tension: 220, friction: 12 };

const closeAnimationProps: UseSpringProps = {
  config: animationConfig,
  to: { opacity: 0 },
};

const openAnimationProps: UseSpringProps = {
  config: { ...animationConfig },
  from: { opacity: 0 },
  to: { opacity: 1 },
};

const AnimatedComponent = createAnimatedOpenCloseTransitionSurface<
  SurfaceProps,
  SurfaceTheme
>({
  closeAnimationProps,
  openAnimationProps,
});

const getAnimatedComponent = () => AnimatedComponent;

export const getAnimatedBackdropSurfaceStyle: ViewStyleGetter<
  SurfaceProps
> = props => ({
  ...getBackdropSurfaceStyle(props),
  opacity: 0,
});

export const animatedBackdropTheme: BackdropTheme = {
  getProps: () => ({ isOpenCloseTransitionAnimated: true }),
  surface: () => ({
    view: {
      getComponent: getAnimatedComponent,
      getProps: getBackdropSurfaceProps,
      getStyle: getAnimatedBackdropSurfaceStyle,
    },
  }),
};
