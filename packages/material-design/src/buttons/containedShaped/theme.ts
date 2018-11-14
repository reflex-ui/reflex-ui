import {
  ButtonSubName,
  DefaultButtonContainer,
  OptionalButtonVariantTheme,
} from '@reflex-ui/core';
import merge from 'lodash/merge';

import {
  getContainedButtonContainerProps,
  getContainedButtonRippleColor,
} from '../contained';
import { withRippleEffect } from '../withRippleEffect';
import { containedShapedStaticButtonTheme } from './staticTheme';

export const containedShapedAnimatedButtonTheme: OptionalButtonVariantTheme = {
  [ButtonSubName.CONTAINER]: {
    allSizes: {
      pressed: {
        getProps: getContainedButtonContainerProps,
      },
    },
  },
  subComponents: {
    [ButtonSubName.CONTAINER]: withRippleEffect({
      getRippleColor: getContainedButtonRippleColor,
    })(DefaultButtonContainer),
  },
};

export const containedShapedButtonTheme: OptionalButtonVariantTheme = merge<
  {},
  OptionalButtonVariantTheme,
  OptionalButtonVariantTheme
>({}, containedShapedStaticButtonTheme, containedShapedAnimatedButtonTheme);
