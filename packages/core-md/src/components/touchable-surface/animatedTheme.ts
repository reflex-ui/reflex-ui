/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  DefaultView,
  InteractionType,
  isTouchDevice,
  SurfacePropsBase,
  TouchableSurfaceTheme,
  ViewStyleGetter,
} from '@reflex-ui/core';
import merge from 'lodash/merge';

import { getButtonRippleColor } from '../button/getButtonRippleColor';
import { withRippleEffect } from '../button/withRippleEffect';
import {
  getTouchableSurfaceSurfaceStyle,
  touchableSurfaceTheme,
} from './theme';

export const getAnimatedTouchableSurfaceSurfaceStyle: ViewStyleGetter<
  SurfacePropsBase
> = props => {
  const updatedProps =
    props.interactionState.type === InteractionType.Pressed
      ? {
          // tslint:disable-next-line:ter-indent
          ...props,
          // tslint:disable-next-line:ter-indent
          interactionState: {
            ...props.interactionState,
            type: isTouchDevice
              ? InteractionType.Enabled
              : InteractionType.Hovered,
          },
          // tslint:disable-next-line:ter-indent
        }
      : props;

  return getTouchableSurfaceSurfaceStyle(updatedProps);
};

export const partialAnimatedTouchableSurfaceTheme: Partial<
  TouchableSurfaceTheme
> = {
  surface: () => ({
    component: withRippleEffect({
      getRippleColor: getButtonRippleColor,
    })(DefaultView),
    getStyle: getAnimatedTouchableSurfaceSurfaceStyle,
  }),
};

export const animatedTouchableSurfaceTheme: TouchableSurfaceTheme = merge<
  {},
  TouchableSurfaceTheme,
  Partial<TouchableSurfaceTheme>
>({}, touchableSurfaceTheme, partialAnimatedTouchableSurfaceTheme);
