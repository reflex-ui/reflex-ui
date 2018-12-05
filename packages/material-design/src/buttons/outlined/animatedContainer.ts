/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ButtonProps,
  DefaultViewSubcomponent,
  InteractivityType,
  isTouchDevice,
  OptionalInteractiveSubTheme,
  OptionalSizedSubTheme,
  OptionalViewTheme,
  SubTheme,
  ViewPropsGetter,
  ViewStyleGetter,
} from '@reflex-ui/core';
import { ViewProps } from 'react-native';

// tslint:disable-next-line:max-line-length
import { getDefaultButtonRippleColor } from '../default/getDefaultButtonRippleColor';
import { withRippleEffect } from '../withRippleEffect';
import { getOutlinedButtonContainerStyle } from './container';

export const getAnimatedPressedOutlinedButtonContainerProps: ViewPropsGetter<
  ButtonProps
> = props => ({
  style: getAnimatedPressedOutlinedButtonContainerStyle(props),
});

export const getAnimatedPressedOutlinedButtonContainerStyle: ViewStyleGetter<
  ButtonProps
> = props =>
  getOutlinedButtonContainerStyle({
    ...props,
    interactivityState: {
      ...props.interactivityState,
      type: isTouchDevice
        ? InteractivityType.ENABLED
        : InteractivityType.HOVERED,
    },
  });

export const outlinedAnimatedButtonContainerTheme: SubTheme<
  ButtonProps,
  ViewProps
> &
  OptionalSizedSubTheme<
    OptionalInteractiveSubTheme<OptionalViewTheme<ButtonProps>>
  > = {
  // tslint:disable-next-line:ter-indent
  allSizes: {
    pressed: {
      getProps: getAnimatedPressedOutlinedButtonContainerProps,
    },
  },
  // tslint:disable-next-line:ter-indent
  component: withRippleEffect({
    getRippleColor: getDefaultButtonRippleColor,
  })(DefaultViewSubcomponent),
  // tslint:disable-next-line:ter-indent
};
