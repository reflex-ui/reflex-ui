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

import { withRippleEffect } from '../withRippleEffect';
import { getDefaultButtonContainerStyle } from './container';
import { getDefaultButtonRippleColor } from './getDefaultButtonRippleColor';

export const getAnimatedPressedDefaultButtonContainerProps: ViewPropsGetter<
  ButtonProps
> = props => ({
  style: getAnimatedPressedDefaultButtonContainerStyle(props),
});

export const getAnimatedPressedDefaultButtonContainerStyle: ViewStyleGetter<
  ButtonProps
> = props =>
  getDefaultButtonContainerStyle({
    ...props,
    interactivityState: {
      ...props.interactivityState,
      type: isTouchDevice
        ? InteractivityType.ENABLED
        : InteractivityType.HOVERED,
    },
  });

export const defaultAnimatedButtonContainerTheme: SubTheme<
  ButtonProps,
  ViewProps
> &
  OptionalSizedSubTheme<
    OptionalInteractiveSubTheme<OptionalViewTheme<ButtonProps>>
  > = {
  // tslint:disable-next-line:ter-indent
  allSizes: {
    pressed: {
      getProps: getAnimatedPressedDefaultButtonContainerProps,
    },
  },
  // tslint:disable-next-line:ter-indent
  component: withRippleEffect({
    getRippleColor: getDefaultButtonRippleColor,
  })(DefaultViewSubcomponent),
  // tslint:disable-next-line:ter-indent
};
