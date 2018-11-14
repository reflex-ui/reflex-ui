import {
  ButtonProps,
  OptionalInteractivityStateTheme,
  OptionalSizedSubcomponentTheme,
  OptionalViewTheme,
  ViewPropsGetter,
  ViewStyleGetter,
} from '@reflex-ui/core';

import { getLowElevationStylesByInteractivity } from '../../elevation';

export const getRaisedButtonContainerProps: ViewPropsGetter<
  ButtonProps
> = props => ({
  style: getRaisedButtonContainerStyle(props),
});

export const getRaisedButtonContainerStyle: ViewStyleGetter<ButtonProps> = ({
  interactivityState,
}) => ({
  ...getLowElevationStylesByInteractivity(interactivityState.type),
});

export const raisedStaticButtonContainerTheme: OptionalSizedSubcomponentTheme<
  OptionalInteractivityStateTheme<OptionalViewTheme<ButtonProps>>
> = {
  allSizes: {
    allStates: {
      getProps: getRaisedButtonContainerProps,
    },
  },
};
