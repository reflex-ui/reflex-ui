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
import merge from 'lodash/merge';
import { ViewProps } from 'react-native';

import {
  ElevationDegree,
  getLowElevationStylesByInteractivity,
} from '../../elevation';
// tslint:disable-next-line:max-line-length
import { getContainedButtonRippleColor } from '../contained/getContainedButtonRippleColor';
import { withRaiseEffect } from '../withRaiseEffect';
import { withRippleEffect } from '../withRippleEffect';
import {
  getRaisedButtonContainerProps,
  getRaisedButtonContainerStyle,
} from './container';

export const getAnimatedRaisedButtonContainerProps: ViewPropsGetter<
  ButtonProps
  // tslint:disable-next-line:ter-arrow-parens (prettier removes it)
> = props =>
  merge({}, getRaisedButtonContainerProps(props), {
    style: getAnimatedRaisedButtonContainerStyle(props),
  });

export const getAnimatedRaisedButtonContainerStyle: ViewStyleGetter<
  ButtonProps
> = () => getLowElevationStylesByInteractivity(InteractivityType.DISABLED);

export const getAnimatedPressedRaisedButtonContainerProps: ViewPropsGetter<
  ButtonProps
  // tslint:disable-next-line:ter-arrow-parens (prettier removes it)
> = props =>
  merge({}, getRaisedButtonContainerProps(props), {
    style: getAnimatedPressedRaisedButtonContainerStyle(props),
  });

export const getAnimatedPressedRaisedButtonContainerStyle: ViewStyleGetter<
  ButtonProps
> = props => ({
  ...getRaisedButtonContainerStyle({
    ...props,
    interactivityState: {
      ...props.interactivityState,
      type: isTouchDevice
        ? InteractivityType.ENABLED
        : InteractivityType.HOVERED,
    },
  }),
  ...getLowElevationStylesByInteractivity(InteractivityType.DISABLED),
});

export const raisedAnimatedButtonContainerTheme: SubTheme<
  ButtonProps,
  ViewProps
> &
  OptionalSizedSubTheme<
    OptionalInteractiveSubTheme<OptionalViewTheme<ButtonProps>>
  > = {
  // tslint:disable-next-line:ter-indent
  allSizes: {
    allStates: {
      getProps: getAnimatedRaisedButtonContainerProps,
    },
    pressed: {
      getProps: getAnimatedPressedRaisedButtonContainerProps,
    },
  },
  // tslint:disable-next-line:ter-indent
  component: withRippleEffect({
    getRippleColor: getContainedButtonRippleColor,
  })(withRaiseEffect(ElevationDegree.LOW)(DefaultViewSubcomponent)),
  // tslint:disable-next-line:ter-indent
};
