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

// tslint:disable-next-line:max-line-length
import { getDefaultButtonRippleColor } from '../default/getDefaultButtonRippleColor';
import { withRippleEffect } from '../withRippleEffect';
import { getIconButtonContainerStyle } from './container';

export const getAnimatedIconButtonContainerStyle: ViewStyleGetter<
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

  return getIconButtonContainerStyle(updatedProps);
};

export const animatedIconButtonContainerTheme: InjectableSubTheme<
  ButtonProps,
  ViewProps,
  ViewStyle
> = merge({}, rawInjectableButtonViewSubTheme, {
  component: withRippleEffect({
    getRippleColor: getDefaultButtonRippleColor,
  })(DefaultViewSubcomponent),
  getStyle: getAnimatedIconButtonContainerStyle,
});
