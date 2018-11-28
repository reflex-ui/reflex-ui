import {
  ButtonProps,
  DefaultViewSubcomponent,
  InteractivityType,
  OptionalInteractiveSubTheme,
  OptionalSizedSubTheme,
  OptionalViewTheme,
  SubProps,
  SubTheme,
} from '@reflex-ui/core';
import { ViewProps } from 'react-native';

import { ElevationDegree } from '../../elevation';
// tslint:disable-next-line:max-line-length
import { getContainedButtonRippleColor } from '../contained/getContainedButtonRippleColor';
import { withRaiseEffect } from '../withRaiseEffect';
import { withRippleEffect } from '../withRippleEffect';
import { getFabButtonContainerProps } from './container';

export const partialAnimatedFabButtonContainerTheme: SubTheme<
  React.ComponentType<SubProps<ButtonProps> & ViewProps>
> &
  OptionalSizedSubTheme<
    OptionalInteractiveSubTheme<OptionalViewTheme<ButtonProps>>
  > = {
  // tslint:disable-next-line:ter-indent
  allSizes: {
    allStates: {
      getProps: props =>
        getFabButtonContainerProps({
          ...props,
          interactivityState: {
            ...props.interactivityState,
            type: InteractivityType.DISABLED,
          },
        }),
    },
  },
  // tslint:disable-next-line:ter-indent
  component: withRippleEffect({
    getRippleColor: getContainedButtonRippleColor,
  })(withRaiseEffect(ElevationDegree.MID)(DefaultViewSubcomponent)),
  // tslint:disable-next-line:ter-indent
};
