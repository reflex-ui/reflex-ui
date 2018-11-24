import {
  ButtonProps,
  DefaultViewSubcomponent,
  InteractivityType,
  OptionalButtonTheme,
  ViewPropsGetter,
  ViewStyleGetter,
} from '@reflex-ui/core';
import merge from 'lodash/merge';

import {
  ElevationDegree,
  getLowElevationStylesByInteractivity,
} from '../../elevation';
// tslint:disable-next-line:max-line-length
import { getContainedButtonRippleColor } from '../contained/getContainedButtonRippleColor';
import { withRaiseEffect } from '../withRaiseEffect';
import { withRippleEffect } from '../withRippleEffect';
import { getRaisedButtonContainerProps } from './container';
import { raisedStaticButtonTheme } from './staticTheme';

export const getAnimatedRaisedButtonContainerProps: ViewPropsGetter<
  ButtonProps
> = props =>
  merge(getRaisedButtonContainerProps(props), {
    style: getAnimatedRaisedButtonContainerStyle(props),
  });

export const getAnimatedRaisedButtonContainerStyle: ViewStyleGetter<
  ButtonProps
> = () => getLowElevationStylesByInteractivity(InteractivityType.DISABLED);

export const partialRaisedButtonTheme: OptionalButtonTheme = {
  container: {
    allSizes: {
      allStates: {
        getProps: getAnimatedRaisedButtonContainerProps,
      },
    },
    component: withRippleEffect({
      getRippleColor: getContainedButtonRippleColor,
    })(withRaiseEffect(ElevationDegree.LOW)(DefaultViewSubcomponent)),
  },
};

export const raisedButtonTheme: OptionalButtonTheme = merge<
  {},
  OptionalButtonTheme,
  OptionalButtonTheme
>({}, raisedStaticButtonTheme, partialRaisedButtonTheme);
