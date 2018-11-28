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
import { getContainedButtonContainerProps } from './container';
import { getContainedButtonRippleColor } from './getContainedButtonRippleColor';

export const containedAnimatedButtonContainerTheme: SubTheme<
  React.ComponentType<SubProps<ButtonProps> & ViewProps>
> &
  OptionalSizedSubTheme<
    OptionalInteractiveSubTheme<OptionalViewTheme<ButtonProps>>
  > = {
  // tslint:disable-next-line:ter-indent
  allSizes: {
    pressed: {
      getProps: getContainedButtonContainerProps,
    },
  },
  // tslint:disable-next-line:ter-indent
  component: withRippleEffect({
    getRippleColor: getContainedButtonRippleColor,
  })(DefaultViewSubcomponent),
  // tslint:disable-next-line:ter-indent
};
