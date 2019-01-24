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
  getMidElevationStylesByInteraction,
} from '../../../elevation';
// tslint:disable-next-line:max-line-length
import { getContainedButtonRippleColor } from '../contained/getContainedButtonRippleColor';
import { withRaiseEffect } from '../withRaiseEffect';
import { withRippleEffect } from '../withRippleEffect';
import { getFabButtonContainerStyle } from './container';

export const getAnimatedFabButtonContainerStyle: ViewStyleGetter<
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
    ...getFabButtonContainerStyle(updatedProps),
    ...getMidElevationStylesByInteraction(InteractionType.Disabled),
  };
};

export const animatedFabButtonContainerTheme: InjectableSubTheme<
  ButtonProps,
  ViewProps,
  ViewStyle
> = merge({}, rawInjectableButtonViewSubTheme, {
  component: withRippleEffect({
    getRippleColor: getContainedButtonRippleColor,
  })(withRaiseEffect(ElevationDegree.Mid)(DefaultViewSubcomponent)),
  getStyle: getAnimatedFabButtonContainerStyle,
});
