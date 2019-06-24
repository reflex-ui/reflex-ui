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
  // SurfaceTheme,
  ViewStyleGetter,
} from '@reflex-ui/core';
import { ComponentType } from 'react';
// import { StyleSheet } from 'react-native';

// import { createAnimatedOpenCloseTransitionSurface } from '../../surface';
import {
  createAnimatedOpenCloseSliderTransitionSurface,
  SliderPosition,
} from '../../../transition';
// tslint:disable-next-line:max-line-length
import { getCommonModalSheetSurfaceProps } from '../getCommonModalSheetSurfaceProps';
import {
  getModalEndSheetSurfaceStyle,
  getModalStartSheetSurfaceStyle,
} from './sideSheetTheme';

/*
 * TODO: We can try to improve the easing here to get close to
 * Material Design's cubic-bezier:
 * https://material.io/design/motion/speed.html#easing
 */
// const animationConfig = { clamp: true, tension: 220, friction: 12 };
/**/

/*
 * Basic memoization implementation for ModalSheetVariant.Start
 */
/*
let currentStartMaxWidth: number | string;
let currentStartComponent: ComponentType<PrimitiveComponentProps<SurfaceProps>>;
const createStartComponent = (maxWidth: number | string = 0) => {
  if (
    maxWidth === currentStartMaxWidth &&
    currentStartComponent !== undefined
  ) {
    return currentStartComponent;
  }

  const closeAnimationProps = {
    config: animationConfig,
    to: { translateX: -maxWidth },
  };

  const openAnimationProps = {
    config: animationConfig,
    from: { translateX: -maxWidth },
    to: { translateX: 0 },
  };

  currentStartMaxWidth = maxWidth;
  currentStartComponent = createAnimatedOpenCloseTransitionSurface<
    SurfaceProps,
    SurfaceTheme
  >({
    closeAnimationProps,
    openAnimationProps,
  });
  return currentStartComponent;
};
*/
let currentStartComponent: ComponentType<PrimitiveComponentProps<SurfaceProps>>;
const createStartComponent = (): ComponentType<
  PrimitiveComponentProps<SurfaceProps>
> => {
  if (currentStartComponent === undefined) {
    currentStartComponent = createAnimatedOpenCloseSliderTransitionSurface({
      position: SliderPosition.Start,
    });
  }
  return currentStartComponent;
};
/**/

/*
 * Basic memoization implementation for ModalSheetVariant.End
 */
/*
let currentEndMaxWidth: number | string;
let currentEndComponent: ComponentType<PrimitiveComponentProps<SurfaceProps>>;
const createEndComponent = (maxWidth: number | string = 0) => {
  if (maxWidth === currentEndMaxWidth && currentEndComponent !== undefined) {
    return currentEndComponent;
  }

  const closeAnimationProps = {
    config: animationConfig,
    to: { translateX: maxWidth },
  };

  const openAnimationProps = {
    config: animationConfig,
    from: { translateX: maxWidth },
    to: { translateX: 0 },
  };

  currentEndMaxWidth = maxWidth;
  currentEndComponent = createAnimatedOpenCloseTransitionSurface<
    SurfaceProps,
    SurfaceTheme
  >({
    closeAnimationProps,
    openAnimationProps,
  });
  return currentEndComponent;
};
*/
let currentEndComponent: ComponentType<PrimitiveComponentProps<SurfaceProps>>;
const createEndComponent = (): ComponentType<
  PrimitiveComponentProps<SurfaceProps>
> => {
  if (currentEndComponent === undefined) {
    currentEndComponent = createAnimatedOpenCloseSliderTransitionSurface({
      position: SliderPosition.End,
    });
  }
  return currentEndComponent;
};
/**/

export const getAnimatedModalEndSheetSurfaceStyle: ViewStyleGetter<
  SurfaceProps
> = props => {
  return {
    ...getModalEndSheetSurfaceStyle(props),
    display: 'flex',
  };
};

export const getAnimatedModalStartSheetSurfaceStyle: ViewStyleGetter<
  SurfaceProps
> = props => {
  return {
    ...getModalStartSheetSurfaceStyle(props),
    display: 'flex',
  };
};

/*
 * ModalSheetTheme.Start and ModalSheetTheme.End
 */

export const animatedModalStartSheetTheme: ModalSheetTheme = {
  getProps: () => ({ isOpenCloseTransitionAnimated: true }),
  surface: () => ({
    view: {
      getComponent: () => createStartComponent(),
      getProps: getCommonModalSheetSurfaceProps,
      getStyle: getAnimatedModalStartSheetSurfaceStyle,
    },
  }),
};

export const animatedModalEndSheetTheme: ModalSheetTheme = {
  getProps: () => ({ isOpenCloseTransitionAnimated: true }),
  surface: () => ({
    view: {
      getComponent: () => createEndComponent(),
      getProps: getCommonModalSheetSurfaceProps,
      getStyle: getAnimatedModalEndSheetSurfaceStyle,
    },
  }),
};
