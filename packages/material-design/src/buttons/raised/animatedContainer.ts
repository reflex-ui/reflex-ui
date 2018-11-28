import {
  ButtonProps,
  DefaultViewSubcomponent,
  InteractivityType,
  OptionalInteractiveSubTheme,
  OptionalSizedSubTheme,
  OptionalViewTheme,
  SubProps,
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
import { getRaisedButtonContainerProps } from './container';

export const getAnimatedRaisedButtonContainerProps: ViewPropsGetter<
  ButtonProps
> = props =>
  merge(getRaisedButtonContainerProps(props), {
    style: getAnimatedRaisedButtonContainerStyle(props),
  });

export const getAnimatedRaisedButtonContainerStyle: ViewStyleGetter<
  ButtonProps
> = () => getLowElevationStylesByInteractivity(InteractivityType.DISABLED);

export const raisedAnimatedButtonContainerTheme: SubTheme<
  React.ComponentType<SubProps<ButtonProps> & ViewProps>
> &
  OptionalSizedSubTheme<
    OptionalInteractiveSubTheme<OptionalViewTheme<ButtonProps>>
  > = {
  // tslint:disable-next-line:ter-indent
  allSizes: {
    allStates: {
      getProps: getAnimatedRaisedButtonContainerProps,
    },
  },
  // tslint:disable-next-line:ter-indent
  component: withRippleEffect({
    getRippleColor: getContainedButtonRippleColor,
  })(withRaiseEffect(ElevationDegree.LOW)(DefaultViewSubcomponent)),
  // tslint:disable-next-line:ter-indent
};
