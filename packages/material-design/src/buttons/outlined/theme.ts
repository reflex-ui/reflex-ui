import {
  ButtonSubName,
  DefaultViewSubcomponent,
  OptionalButtonTheme,
} from '@reflex-ui/core';
import merge from 'lodash/merge';

// tslint:disable-next-line:max-line-length
import { getDefaultButtonRippleColor } from '../default/getDefaultButtonRippleColor';
import { withRippleEffect } from '../withRippleEffect';
import { getOutlinedButtonContainerProps } from './container';
import { outlinedStaticButtonTheme } from './staticTheme';

export const outlinedAnimatedButtonTheme: OptionalButtonTheme = {
  [ButtonSubName.CONTAINER]: {
    allSizes: {
      pressed: {
        getProps: getOutlinedButtonContainerProps,
      },
    },
    component: withRippleEffect({
      getRippleColor: getDefaultButtonRippleColor,
    })(DefaultViewSubcomponent),
  },
};

export const outlinedButtonTheme: OptionalButtonTheme = merge<
  {},
  OptionalButtonTheme,
  OptionalButtonTheme
>({}, outlinedStaticButtonTheme, outlinedAnimatedButtonTheme);
