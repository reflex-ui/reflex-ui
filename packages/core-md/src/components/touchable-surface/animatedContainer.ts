/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  BuiltInViewTheme,
  DefaultView,
  InteractionType,
  isTouchDevice,
  TouchableSurfaceProps,
  ViewStyleGetter,
} from '@reflex-ui/core';

import { getButtonRippleColor } from '../button/getButtonRippleColor';
import { withRippleEffect } from '../button/withRippleEffect';
import { getTouchableSurfaceContainerStyle } from './container';

export const getAnimatedTouchableSurfaceContainerStyle: ViewStyleGetter<
  TouchableSurfaceProps
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

  return getTouchableSurfaceContainerStyle(updatedProps);
};

export const animatedTouchableSurfaceContainerTheme: BuiltInViewTheme<
  TouchableSurfaceProps
> = {
  component: withRippleEffect({
    getRippleColor: getButtonRippleColor,
  })(DefaultView),
  getStyle: getAnimatedTouchableSurfaceContainerStyle,
};
