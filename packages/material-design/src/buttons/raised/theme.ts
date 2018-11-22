import {
  ButtonProps,
  ButtonSubName,
  DefaultViewSubcomponent,
  InteractivityType,
  OptionalButtonVariantTheme,
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

export const partialRaisedButtonTheme: OptionalButtonVariantTheme = {
  [ButtonSubName.CONTAINER]: {
    allSizes: {
      allStates: {
        getProps: getAnimatedRaisedButtonContainerProps,
      },
    },
  },
  subComponents: {
    [ButtonSubName.CONTAINER]: withRippleEffect({
      getRippleColor: getContainedButtonRippleColor,
    })(withRaiseEffect(ElevationDegree.LOW)(DefaultViewSubcomponent)),
  },
};

export const raisedButtonTheme: OptionalButtonVariantTheme = merge<
  {},
  OptionalButtonVariantTheme,
  OptionalButtonVariantTheme
>({}, raisedStaticButtonTheme, partialRaisedButtonTheme);
