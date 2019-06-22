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
  ViewStyleGetter,
} from '@reflex-ui/core';
import { ComponentType } from 'react';

import {
  createAnimatedOpenCloseSliderTransitionSurface,
  SliderPosition,
} from '../../../transition';
// tslint:disable-next-line:max-line-length
import { getCommonModalSheetSurfaceProps } from '../getCommonModalSheetSurfaceProps';
import {
  getModalBottomSheetSurfaceStyle,
  getModalTopSheetSurfaceStyle,
} from './topBottomSheetTheme';

/*
 * Basic memoization implementation for ModalSheetVariant.Top
 */
/*
let currentTopMaxHeight: number | string;
let currentTopComponent: ComponentType<PrimitiveComponentProps<SurfaceProps>>;
const createTopComponent = (maxHeight: number | string = 0) => {
  if (maxHeight === currentTopMaxHeight && currentTopComponent !== undefined) {
    return currentTopComponent;
  }

  const closeAnimationProps = {
    config: animationConfig,
    to: { translateY: -maxHeight },
  };

  const openAnimationProps = {
    config: animationConfig,
    from: { translateY: -maxHeight },
    to: { translateY: 0 },
  };

  currentTopMaxHeight = maxHeight;
  currentTopComponent = createAnimatedOpenCloseTransitionSurface<
    SurfaceProps,
    SurfaceTheme
  >({
    closeAnimationProps,
    openAnimationProps,
  });
  return currentTopComponent;
};
*/
/**/

let currentTopComponent: ComponentType<PrimitiveComponentProps<SurfaceProps>>;
const createTopComponent = (): ComponentType<
  PrimitiveComponentProps<SurfaceProps>
> => {
  if (currentTopComponent === undefined) {
    currentTopComponent = createAnimatedOpenCloseSliderTransitionSurface({
      position: SliderPosition.Top,
    });
  }
  return currentTopComponent;
};

/*
 * Basic memoization implementation for ModalSheetVariant.Bottom
 */
/*
let currentBottomMaxHeight: number | string;
let currentBottomComponent: ComponentType<
  PrimitiveComponentProps<SurfaceProps>
>;
const createBottomComponent = (maxHeight: number | string = 0) => {
  if (
    maxHeight === currentBottomMaxHeight &&
    currentBottomComponent !== undefined
  ) {
    return currentBottomComponent;
  }

  const closeAnimationProps = {
    config: animationConfig,
    to: { translateY: maxHeight },
  };

  const openAnimationProps = {
    config: animationConfig,
    from: { translateY: maxHeight },
    to: { translateY: 0 },
  };

  currentBottomMaxHeight = maxHeight;
  currentBottomComponent = createAnimatedOpenCloseTransitionSurface<
    SurfaceProps,
    SurfaceTheme
  >({
    closeAnimationProps,
    openAnimationProps,
  });
  return currentBottomComponent;
};
*/
let currentBottomComponent: ComponentType<
  PrimitiveComponentProps<SurfaceProps>
>;
const createBottomComponent = (): ComponentType<
  PrimitiveComponentProps<SurfaceProps>
> => {
  if (currentBottomComponent === undefined) {
    currentBottomComponent = createAnimatedOpenCloseSliderTransitionSurface({
      position: SliderPosition.Bottom,
    });
  }
  return currentBottomComponent;
};
/**/

export const getAnimatedModalTopSheetSurfaceStyle: ViewStyleGetter<
  SurfaceProps
> = props => {
  return {
    ...getModalTopSheetSurfaceStyle(props),
    display: 'flex',
  };
};

export const getAnimatedModalBottomSheetSurfaceStyle: ViewStyleGetter<
  SurfaceProps
> = props => {
  return {
    ...getModalBottomSheetSurfaceStyle(props),
    display: 'flex',
  };
};

export const animatedModalTopSheetTheme: ModalSheetTheme = {
  getProps: ({ isOpenCloseTransitionAnimated }) => ({
    isOpenCloseTransitionAnimated:
      isOpenCloseTransitionAnimated !== undefined
        ? isOpenCloseTransitionAnimated
        : true,
  }),
  surface: () => ({
    view: {
      /*
      getComponent: props =>
        createTopComponent(StyleSheet.flatten(props.style).maxHeight),
      */
      getComponent: () => createTopComponent(),
      getProps: getCommonModalSheetSurfaceProps,
      getStyle: getAnimatedModalTopSheetSurfaceStyle,
    },
  }),
};

export const animatedModalBottomSheetTheme: ModalSheetTheme = {
  getProps: ({ isOpenCloseTransitionAnimated }) => ({
    isOpenCloseTransitionAnimated:
      isOpenCloseTransitionAnimated !== undefined
        ? isOpenCloseTransitionAnimated
        : true,
  }),
  surface: () => ({
    view: {
      getComponent: () => createBottomComponent(),
      /*
      getComponent: props =>
        createBottomComponent(StyleSheet.flatten(props.style).maxHeight),
      */
      getProps: getCommonModalSheetSurfaceProps,
      getStyle: getAnimatedModalBottomSheetSurfaceStyle,
    },
  }),
};
