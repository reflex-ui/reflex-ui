/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  BuiltInViewChildTheme,
  ButtonProps,
  DefaultViewChild,
  InteractionType,
  isTouchDevice,
  ViewStyleGetter,
} from '@reflex-ui/core';

import {
  ElevationDegree,
  getLowElevationStylesByInteraction,
} from '../../../elevation';
import { getButtonRippleColor } from '../getButtonRippleColor';
import { withRaiseEffect } from '../withRaiseEffect';
import { withRippleEffect } from '../withRippleEffect';
import { getRaisedButtonContainerStyle } from './container';

export const getAnimatedRaisedButtonContainerStyle: ViewStyleGetter<
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

  return {
    ...getRaisedButtonContainerStyle(updatedProps),
    ...getLowElevationStylesByInteraction(InteractionType.Disabled),
  };
};

export const animatedRaisedButtonContainerTheme: BuiltInViewChildTheme<
  ButtonProps
> = {
  component: withRippleEffect({
    getRippleColor: getButtonRippleColor,
  })(withRaiseEffect(ElevationDegree.Low)(DefaultViewChild)),
  getStyle: getAnimatedRaisedButtonContainerStyle,
};
