import {
  ButtonProps,
  OptionalInteractiveSubTheme,
  OptionalSizedSubTheme,
  OptionalViewTheme,
  ViewPropsGetter,
  ViewStyleGetter,
} from '@reflex-ui/core';

import { getLowElevationStylesByInteractivity } from '../../elevation';
import { getContainedButtonContainerStyle } from '../contained/container';

export const getRaisedButtonContainerProps: ViewPropsGetter<
  ButtonProps
> = props => ({
  style: getRaisedButtonContainerStyle(props),
});

export const getRaisedButtonContainerStyle: ViewStyleGetter<
  ButtonProps
> = props => ({
  ...getContainedButtonContainerStyle(props),
  ...getLowElevationStylesByInteractivity(props.interactivityState.type),
});

export const raisedStaticButtonContainerTheme: OptionalSizedSubTheme<
  OptionalInteractiveSubTheme<OptionalViewTheme<ButtonProps>>
> = {
  allSizes: {
    allStates: {
      getProps: getRaisedButtonContainerProps,
    },
  },
};
