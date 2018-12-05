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
  OptionalSubTheme,
  OptionalViewTheme,
  ViewPropsGetter,
  ViewStyleGetter,
} from '@reflex-ui/core';
import merge from 'lodash/merge';
import { ViewProps } from 'react-native';

import {
  ElevationDegree,
  getMidElevationStylesByInteractivity,
} from '../../elevation';
// tslint:disable-next-line:max-line-length
import { getContainedButtonRippleColor } from '../contained/getContainedButtonRippleColor';
import { withRaiseEffect } from '../withRaiseEffect';
import { withRippleEffect } from '../withRippleEffect';
import {
  getFabButtonContainerProps,
  getFabButtonContainerStyle,
} from './container';

export const getAnimatedFabButtonContainerProps: ViewPropsGetter<
  ButtonProps
  // tslint:disable-next-line:ter-arrow-parens (prettier removes it)
> = props =>
  merge({}, getFabButtonContainerProps(props), {
    style: getAnimatedFabButtonContainerStyle(props),
  });

export const getAnimatedFabButtonContainerStyle: ViewStyleGetter<
  ButtonProps
> = () => getMidElevationStylesByInteractivity(InteractivityType.DISABLED);

export const getAnimatedPressedFabButtonContainerProps: ViewPropsGetter<
  ButtonProps
  // tslint:disable-next-line:ter-arrow-parens (prettier removes it)
> = props =>
  merge(
    {},
    getFabButtonContainerProps({
      ...props,
      interactivityState: {
        ...props.interactivityState,
        type: isTouchDevice
          ? InteractivityType.ENABLED
          : InteractivityType.HOVERED,
      },
    }),
    {
      style: getAnimatedPressedFabButtonContainerStyle(props),
    },
  );

export const getAnimatedPressedFabButtonContainerStyle: ViewStyleGetter<
  ButtonProps
> = props => ({
  ...getFabButtonContainerStyle({
    ...props,
    interactivityState: {
      ...props.interactivityState,
      type: isTouchDevice
        ? InteractivityType.ENABLED
        : InteractivityType.HOVERED,
    },
  }),
  ...getMidElevationStylesByInteractivity(InteractivityType.DISABLED),
});

export const fabAnimatedButtonContainerTheme: OptionalSubTheme<
  ButtonProps,
  ViewProps
> &
  OptionalSizedSubTheme<
    OptionalInteractiveSubTheme<OptionalViewTheme<ButtonProps>>
  > = {
  // tslint:disable-next-line:ter-indent
  allSizes: {
    allStates: {
      getProps: getAnimatedFabButtonContainerProps,
    },
    pressed: {
      getProps: getAnimatedPressedFabButtonContainerProps,
    },
  },
  // tslint:disable-next-line:ter-indent
  component: withRippleEffect({
    getRippleColor: getContainedButtonRippleColor,
  })(withRaiseEffect(ElevationDegree.MID)(DefaultViewSubcomponent)),
  // tslint:disable-next-line:ter-indent
};
