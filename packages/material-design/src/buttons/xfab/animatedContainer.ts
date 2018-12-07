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
  InteractivityType,
  isTouchDevice,
  rawInjectableButtonViewSubTheme,
  ViewStyleGetter,
} from '@reflex-ui/core';
import merge from 'lodash/merge';
import { ViewProps, ViewStyle } from 'react-native';

import {
  ElevationDegree,
  getMidElevationStylesByInteractivity,
} from '../../elevation';
// tslint:disable-next-line:max-line-length
import { getContainedButtonRippleColor } from '../contained/getContainedButtonRippleColor';
import { withRaiseEffect } from '../withRaiseEffect';
import { withRippleEffect } from '../withRippleEffect';
import { getXFabButtonContainerStyle } from './container';

export const getAnimatedXFabButtonContainerStyle: ViewStyleGetter<
  ButtonProps
  // tslint:disable-next-line:ter-arrow-parens
> = props => {
  const updatedProps =
    props.interactivityState.type === InteractivityType.PRESSED
      ? {
          // tslint:disable-next-line:ter-indent
          ...props,
          // tslint:disable-next-line:ter-indent
          interactivityState: {
            ...props.interactivityState,
            type: isTouchDevice
              ? InteractivityType.ENABLED
              : InteractivityType.HOVERED,
          },
          // tslint:disable-next-line:ter-indent
        }
      : props;

  return {
    ...getXFabButtonContainerStyle(updatedProps),
    ...getMidElevationStylesByInteractivity(InteractivityType.DISABLED),
  };
};

export const animatedXFabButtonContainerTheme: InjectableSubTheme<
  ButtonProps,
  ViewProps,
  ViewStyle
> = merge({}, rawInjectableButtonViewSubTheme, {
  component: withRippleEffect({
    getRippleColor: getContainedButtonRippleColor,
  })(withRaiseEffect(ElevationDegree.MID)(DefaultViewSubcomponent)),
  getStyle: getAnimatedXFabButtonContainerStyle,
});
