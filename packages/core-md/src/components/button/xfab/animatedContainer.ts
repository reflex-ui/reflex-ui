/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ButtonProps,
  DefaultViewChild,
  InjectableSubTheme,
  InteractionType,
  isTouchDevice,
  ViewStyleGetter,
} from '@reflex-ui/core';
import { ViewProps, ViewStyle } from 'react-native';

import {
  ElevationDegree,
  getMidElevationStylesByInteraction,
} from '../../../elevation';
import { getButtonRippleColor } from '../getButtonRippleColor';
import { withRaiseEffect } from '../withRaiseEffect';
import { withRippleEffect } from '../withRippleEffect';
import { getXFabButtonContainerStyle } from './container';

export const getAnimatedXFabButtonContainerStyle: ViewStyleGetter<
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
    ...getXFabButtonContainerStyle(updatedProps),
    ...getMidElevationStylesByInteraction(InteractionType.Disabled),
  };
};

export const animatedXFabButtonContainerTheme: InjectableSubTheme<
  ButtonProps,
  ViewProps,
  ViewStyle
> = {
  component: withRippleEffect({
    getRippleColor: getButtonRippleColor,
  })(withRaiseEffect(ElevationDegree.Mid)(DefaultViewChild)),
  getStyle: getAnimatedXFabButtonContainerStyle,
};
