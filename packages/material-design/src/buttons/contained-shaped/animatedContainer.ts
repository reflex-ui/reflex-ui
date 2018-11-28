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

import {
  getContainedButtonContainerProps,
  getContainedButtonRippleColor,
} from '../contained';
import { withRippleEffect } from '../withRippleEffect';

export const containedShapedAnimatedButtonContainerTheme: SubTheme<
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
