import {
  ButtonProps,
  DefaultViewSubcomponent,
  OptionalInteractiveSubTheme,
  OptionalSizedSubTheme,
  OptionalViewTheme,
  SubProps,
  SubTheme,
} from '@reflex-ui/core';
import { ViewProps } from 'react-native';

import { withRippleEffect } from '../withRippleEffect';
import { getDefaultButtonContainerProps } from './container';
import { getDefaultButtonRippleColor } from './getDefaultButtonRippleColor';

export const defaultAnimatedButtonContainerTheme: SubTheme<
  React.ComponentType<SubProps<ButtonProps> & ViewProps>
> &
  OptionalSizedSubTheme<
    OptionalInteractiveSubTheme<OptionalViewTheme<ButtonProps>>
  > = {
  // tslint:disable-next-line:ter-indent
  allSizes: {
    pressed: {
      getProps: getDefaultButtonContainerProps,
    },
  },
  // tslint:disable-next-line:ter-indent
  component: withRippleEffect({
    getRippleColor: getDefaultButtonRippleColor,
  })(DefaultViewSubcomponent),
  // tslint:disable-next-line:ter-indent
};
