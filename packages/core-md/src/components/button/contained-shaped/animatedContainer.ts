/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  BuiltInViewTheme,
  ButtonProps,
  DefaultView,
  InteractionType,
  isTouchDevice,
  ViewStyleGetter,
} from '@reflex-ui/core';

import { getButtonRippleColor } from '../getButtonRippleColor';
import { withRippleEffect } from '../withRippleEffect';
import { getContainedShapedButtonContainerStyle } from './container';

export const getAnimatedContainedShapedButtonContainerStyle: ViewStyleGetter<
  ButtonProps
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

  return getContainedShapedButtonContainerStyle(updatedProps);
};

export const animatedContainedShapedButtonContainerTheme: BuiltInViewTheme<
  ButtonProps
> = {
  component: withRippleEffect({
    getRippleColor: getButtonRippleColor,
  })(DefaultView),
  getStyle: getAnimatedContainedShapedButtonContainerStyle,
};
