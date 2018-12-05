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
import { getContainedButtonContainerStyle } from './container';
import { getContainedButtonRippleColor } from './getContainedButtonRippleColor';

export const getAnimatedPressedContainedButtonContainerProps: ViewPropsGetter<
  ButtonProps
> = props => ({
  style: getAnimatedPressedContainedButtonContainerStyle(props),
});

export const getAnimatedPressedContainedButtonContainerStyle: ViewStyleGetter<
  ButtonProps
> = props =>
  getContainedButtonContainerStyle({
    ...props,
    interactivityState: {
      ...props.interactivityState,
      type: isTouchDevice
        ? InteractivityType.ENABLED
        : InteractivityType.HOVERED,
    },
  });

export const containedAnimatedButtonContainerTheme: SubTheme<
  ButtonProps,
  ViewProps
> &
  OptionalSizedSubTheme<
    OptionalInteractiveSubTheme<OptionalViewTheme<ButtonProps>>
  > = {
  // tslint:disable-next-line:ter-indent
  allSizes: {
    pressed: {
      getProps: getAnimatedPressedContainedButtonContainerProps,
    },
  },
  // tslint:disable-next-line:ter-indent
  component: withRippleEffect({
    getRippleColor: getContainedButtonRippleColor,
  })(DefaultViewSubcomponent),
  // tslint:disable-next-line:ter-indent
};
