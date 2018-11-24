import {
  ButtonSubName,
  DefaultViewSubcomponent,
  OptionalButtonTheme,
} from '@reflex-ui/core';
import merge from 'lodash/merge';

import {
  getContainedButtonContainerProps,
  getContainedButtonRippleColor,
} from '../contained';
import { withRippleEffect } from '../withRippleEffect';
import { containedShapedStaticButtonTheme } from './staticTheme';

export const containedShapedAnimatedButtonTheme: OptionalButtonTheme = {
  [ButtonSubName.CONTAINER]: {
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

export const containedShapedButtonTheme: OptionalButtonTheme = merge<
  {},
  OptionalButtonTheme,
  OptionalButtonTheme
>({}, containedShapedStaticButtonTheme, containedShapedAnimatedButtonTheme);
