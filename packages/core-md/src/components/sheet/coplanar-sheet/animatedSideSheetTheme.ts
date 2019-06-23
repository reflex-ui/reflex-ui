/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  CoplanarSheetTheme,
  PrimitiveComponentProps,
  SurfaceProps,
  // SurfaceTheme,
  ViewStyleGetter,
} from '@reflex-ui/core';
import { ComponentType } from 'react';
// import { StyleSheet } from 'react-native';

/*
import { createAnimatedOpenCloseTransitionSurfacePusher } from '../../surface';
*/
import {
  createAnimatedOpenCloseSliderTransitionSurface,
  SliderPosition,
} from '../../../transition';

import {
  getCoplanarEndSheetSurfaceStyle,
  getCoplanarStartSheetSurfaceStyle,
} from './sideSheetTheme';

/*
 * TODO: We can try to improve the easing here to get close to
 * Material Design's cubic-bezier:
 * https://material.io/design/motion/speed.html#easing
 */
// const animationConfig = { clamp: true, tension: 220, friction: 12 };
/**/

/*
 * Basic memoization implementation for CoplanarSheetVariant.Start
 */
let currentStartComponent: ComponentType<PrimitiveComponentProps<SurfaceProps>>;
const createStartComponent = (): ComponentType<
  PrimitiveComponentProps<SurfaceProps>
> => {
  if (currentStartComponent === undefined) {
    currentStartComponent = createAnimatedOpenCloseSliderTransitionSurface({
      hasPusher: true,
      position: SliderPosition.Start,
    });
  }
  return currentStartComponent;
};
/**/

/*
 * Basic memoization implementation for CoplanarSheetVariant.End
 */
let currentEndComponent: ComponentType<PrimitiveComponentProps<SurfaceProps>>;
const createEndComponent = (): ComponentType<
  PrimitiveComponentProps<SurfaceProps>
> => {
  if (currentEndComponent === undefined) {
    currentEndComponent = createAnimatedOpenCloseSliderTransitionSurface({
      hasPusher: true,
      position: SliderPosition.End,
    });
  }
  return currentEndComponent;
};
/**/

export const getAnimatedCoplanarStartSheetSurfaceStyle: ViewStyleGetter<
  SurfaceProps
> = props => ({
  ...getCoplanarStartSheetSurfaceStyle(props),
  display: 'flex',
});

export const getAnimatedCoplanarEndSheetSurfaceStyle: ViewStyleGetter<
  SurfaceProps
> = props => ({
  ...getCoplanarEndSheetSurfaceStyle(props),
  display: 'flex',
});

export const animatedCoplanarStartSheetTheme: CoplanarSheetTheme = {
  getProps: () => ({ isOpenCloseTransitionAnimated: true }),
  surface: () => ({
    view: {
      /*
      getComponent: props =>
        createStartComponent(StyleSheet.flatten(props.style).maxWidth),
        */
      getComponent: () => createStartComponent(),
      getStyle: getAnimatedCoplanarStartSheetSurfaceStyle,
    },
  }),
};

export const animatedCoplanarEndSheetTheme: CoplanarSheetTheme = {
  getProps: () => ({ isOpenCloseTransitionAnimated: true }),
  surface: () => ({
    view: {
      /*
      getComponent: props =>
        createEndComponent(StyleSheet.flatten(props.style).maxWidth),
        */
      getComponent: () => createEndComponent(),
      getStyle: getAnimatedCoplanarEndSheetSurfaceStyle,
    },
  }),
};
