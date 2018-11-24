import {
  ButtonSubName,
  DefaultViewSubcomponent,
  OptionalButtonTheme,
} from '@reflex-ui/core';
import merge from 'lodash/merge';

// tslint:disable-next-line:max-line-length
import { getDefaultButtonRippleColor } from '../default/getDefaultButtonRippleColor';
import { getOutlinedButtonContainerProps } from '../outlined/container';
import { withRippleEffect } from '../withRippleEffect';
import { outlinedShapedStaticButtonTheme } from './staticTheme';

export const outlinedShapedAnimatedButtonTheme: OptionalButtonTheme = {
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

export const outlinedShapedButtonTheme: OptionalButtonTheme = merge<
  {},
  OptionalButtonTheme,
  OptionalButtonTheme
>({}, outlinedShapedStaticButtonTheme, outlinedShapedAnimatedButtonTheme);
