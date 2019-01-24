/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ButtonProps,
  DefaultViewSubcomponent,
  InjectableSubTheme,
  InteractionType,
  isTouchDevice,
  rawInjectableButtonViewSubTheme,
  ViewStyleGetter,
} from '@reflex-ui/core';
import merge from 'lodash/merge';
import { ViewProps, ViewStyle } from 'react-native';

import {
  ElevationDegree,
  getLowElevationStylesByInteraction,
} from '../../../elevation';
// tslint:disable-next-line:max-line-length
import { getContainedButtonRippleColor } from '../contained/getContainedButtonRippleColor';
import { withRaiseEffect } from '../withRaiseEffect';
import { withRippleEffect } from '../withRippleEffect';
import { getRaisedButtonContainerStyle } from './container';

export const getAnimatedRaisedButtonContainerStyle: ViewStyleGetter<
  ButtonProps
  // tslint:disable-next-line:ter-arrow-parens
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

export const animatedRaisedButtonContainerTheme: InjectableSubTheme<
  ButtonProps,
  ViewProps,
  ViewStyle
> = merge({}, rawInjectableButtonViewSubTheme, {
  component: withRippleEffect({
    getRippleColor: getContainedButtonRippleColor,
  })(withRaiseEffect(ElevationDegree.Low)(DefaultViewSubcomponent)),
  getStyle: getAnimatedRaisedButtonContainerStyle,
});
