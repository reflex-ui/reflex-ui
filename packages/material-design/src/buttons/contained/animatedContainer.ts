import {
  ButtonProps,
  DefaultViewSubcomponent,
  OptionalInteractiveSubTheme,
  OptionalSizedSubTheme,
  OptionalViewTheme,
  SubTheme,
} from '@reflex-ui/core';
import { ViewProps } from 'react-native';

import { withRippleEffect } from '../withRippleEffect';
import { getContainedButtonContainerProps } from './container';
import { getContainedButtonRippleColor } from './getContainedButtonRippleColor';

export const containedAnimatedButtonContainerTheme: SubTheme<
  ButtonProps,
  ViewProps
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
