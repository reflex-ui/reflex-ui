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
  ViewStyleGetter,
} from '@reflex-ui/core';
import { ComponentType } from 'react';

import {
  createAnimatedOpenCloseSliderTransitionPusherSurface,
  SliderPosition,
} from '../../../transition';

import {
  getCoplanarBottomSheetSurfaceStyle,
  getCoplanarTopSheetSurfaceStyle,
} from './topBottomSheetTheme';

/**
 * Basic memoization implementation for CoplanarSheetVariant.Top.
 */
let currentTopComponent: ComponentType<PrimitiveComponentProps<SurfaceProps>>;
const createTopComponent = (): ComponentType<
  PrimitiveComponentProps<SurfaceProps>
> => {
  if (currentTopComponent === undefined) {
    currentTopComponent = createAnimatedOpenCloseSliderTransitionPusherSurface({
      position: SliderPosition.Top,
    });
  }
  return currentTopComponent;
};
/**/

/**
 * Basic memoization implementation for CoplanarSheetVariant.Bottom.
 */
let currentBottomComponent: ComponentType<
  PrimitiveComponentProps<SurfaceProps>
>;
const createBottomComponent = (): ComponentType<
  PrimitiveComponentProps<SurfaceProps>
> => {
  if (currentBottomComponent === undefined) {
    // tslint:disable-next-line:max-line-length
    currentBottomComponent = createAnimatedOpenCloseSliderTransitionPusherSurface(
      {
        position: SliderPosition.Bottom,
      },
    );
  }
  return currentBottomComponent;
};
/**/

export const getAnimatedCoplanarTopSheetSurfaceStyle: ViewStyleGetter<
  SurfaceProps
> = props => ({
  ...getCoplanarTopSheetSurfaceStyle(props),
  display: 'flex',
});

export const getAnimatedCoplanarBottomSheetSurfaceStyle: ViewStyleGetter<
  SurfaceProps
> = props => ({
  ...getCoplanarBottomSheetSurfaceStyle(props),
  display: 'flex',
});

export const animatedCoplanarTopSheetTheme: CoplanarSheetTheme = {
  getProps: ({ isOpenCloseTransitionAnimated }) => ({
    isOpenCloseTransitionAnimated:
      isOpenCloseTransitionAnimated !== undefined
        ? isOpenCloseTransitionAnimated
        : true,
  }),
  surface: () => ({
    view: {
      getComponent: () => createTopComponent(),
      getStyle: getAnimatedCoplanarTopSheetSurfaceStyle,
    },
  }),
};

export const animatedCoplanarBottomSheetTheme: CoplanarSheetTheme = {
  getProps: ({ isOpenCloseTransitionAnimated }) => ({
    isOpenCloseTransitionAnimated:
      isOpenCloseTransitionAnimated !== undefined
        ? isOpenCloseTransitionAnimated
        : true,
  }),
  surface: () => ({
    view: {
      getComponent: () => createBottomComponent(),
      getStyle: getAnimatedCoplanarBottomSheetSurfaceStyle,
    },
  }),
};
