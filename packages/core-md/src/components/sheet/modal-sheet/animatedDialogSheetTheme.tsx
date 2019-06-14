/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ModalSheetTheme,
  PrimitiveComponentProps,
  SurfaceProps,
  SurfaceTheme,
  ViewStyleGetter,
} from '@reflex-ui/core';
import { ComponentType } from 'react';

import { createAnimatedOpenCloseTransitionSurface } from '../../surface';
// tslint:disable-next-line:max-line-length
import { getCommonModalSheetSurfaceProps } from '../getCommonModalSheetSurfaceProps';
import {
  getModalDialogSheetProps,
  getModalDialogSheetSurfaceStyle,
} from './dialogSheetTheme';

/*
 * TODO: We can try to improve the easing here to get close to
 * Material Design's cubic-bezier:
 * https://material.io/design/motion/speed.html#easing
 */
const animationConfig = { clamp: true, tension: 220, friction: 12 };
/**/

const closeAnimationProps = {
  config: animationConfig,
  to: { opacity: 0, scale: 0.8 },
};

const openAnimationProps = {
  config: animationConfig,
  from: { opacity: 0, scale: 0.8 },
  to: { opacity: 1, scale: 1 },
};

const AnimatedComponent: ComponentType<
  PrimitiveComponentProps<SurfaceProps>
> = createAnimatedOpenCloseTransitionSurface<SurfaceProps, SurfaceTheme>({
  closeAnimationProps,
  openAnimationProps,
});

export const getAnimatedModalDialogSheetSurfaceStyle: ViewStyleGetter<
  SurfaceProps
> = props => {
  return {
    ...getModalDialogSheetSurfaceStyle(props),
    display: 'flex',
  };
};

export const animatedModalDialogSheetTheme: ModalSheetTheme = {
  getProps: props => ({
    ...getModalDialogSheetProps(props),
    isOpenCloseTransitionAnimated:
      props.isOpenCloseTransitionAnimated !== undefined
        ? props.isOpenCloseTransitionAnimated
        : true,
  }),
  surface: () => ({
    view: {
      getComponent: () => AnimatedComponent,
      getProps: getCommonModalSheetSurfaceProps,
      getStyle: getAnimatedModalDialogSheetSurfaceStyle,
    },
  }),
};
