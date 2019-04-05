/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ButtonProps,
  ComponentThemeGetter,
  DefaultView,
  InteractionType,
  isTouchDevice,
  SurfacePropsBase,
  SurfaceTheme,
  ViewStyleGetter,
} from '@reflex-ui/core';

import { getButtonRippleColor } from '../getButtonRippleColor';
import { withRippleEffect } from '../withRippleEffect';
import { getContainedButtonContainerStyle } from './container';

export const getAnimatedContainedButtonContainerStyle: ViewStyleGetter<
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

  return getContainedButtonContainerStyle(updatedProps);
};

export const getAnimatedContainedButtonSurfaceTheme: ComponentThemeGetter<
  ButtonProps,
  SurfaceTheme
> = () => ({
  component: withRippleEffect({
    getRippleColor: getButtonRippleColor,
  })(DefaultView),
  getStyle: getAnimatedContainedButtonContainerStyle,
});
