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

import {
  getDefaultButtonContainerProps,
  getDefaultButtonRippleColor,
} from '../default';
import { withRippleEffect } from '../withRippleEffect';

export const iconAnimatedButtonContainerTheme: SubTheme<
  React.ComponentType<SubProps<ButtonProps> & ViewProps>
> &
  OptionalSizedSubTheme<
    OptionalInteractiveSubTheme<OptionalViewTheme<ButtonProps>>
  > = {
  // tslint:disable-next-line:ter-indent
  allSizes: {
    pressed: {
      getProps: props =>
        getDefaultButtonContainerProps({
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
    getRippleColor: getDefaultButtonRippleColor,
  })(DefaultViewSubcomponent),
  // tslint:disable-next-line:ter-indent
};
