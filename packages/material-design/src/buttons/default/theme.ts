import {
  ButtonSubName,
  DefaultViewSubcomponent,
  OptionalButtonTheme,
} from '@reflex-ui/core';
import merge from 'lodash/merge';

import { withRippleEffect } from '../withRippleEffect';
import { getDefaultButtonContainerProps } from './container';
import { getDefaultButtonRippleColor } from './getDefaultButtonRippleColor';
import { defaultStaticButtonTheme } from './staticTheme';

export const defaultAnimatedButtonTheme: OptionalButtonTheme = {
  [ButtonSubName.CONTAINER]: {
    allSizes: {
      pressed: {
        getProps: getDefaultButtonContainerProps,
      },
    },
    component: withRippleEffect({
      getRippleColor: getDefaultButtonRippleColor,
    })(DefaultViewSubcomponent),
  },
};

export const defaultButtonTheme: OptionalButtonTheme = merge<
  {},
  OptionalButtonTheme,
  OptionalButtonTheme
>({}, defaultStaticButtonTheme, defaultAnimatedButtonTheme);
