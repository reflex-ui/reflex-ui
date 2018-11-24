import { DefaultViewSubcomponent, OptionalButtonTheme } from '@reflex-ui/core';
import merge from 'lodash/merge';

import { withRippleEffect } from '../withRippleEffect';
import { getContainedButtonContainerProps } from './container';
import { getContainedButtonRippleColor } from './getContainedButtonRippleColor';
import { containedStaticButtonTheme } from './staticTheme';

export const containedAnimatedButtonTheme: OptionalButtonTheme = {
  container: {
    allSizes: {
      pressed: {
        getProps: getContainedButtonContainerProps,
      },
    },
    component: withRippleEffect({
      getRippleColor: getContainedButtonRippleColor,
    })(DefaultViewSubcomponent),
  },
};

export const containedButtonTheme: OptionalButtonTheme = merge<
  {},
  OptionalButtonTheme,
  OptionalButtonTheme
>({}, containedStaticButtonTheme, containedAnimatedButtonTheme);
