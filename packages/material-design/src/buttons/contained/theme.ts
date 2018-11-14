import {
  ButtonSubName,
  DefaultButtonContainer,
  OptionalButtonVariantTheme,
} from '@reflex-ui/core';
import merge from 'lodash/merge';

import { withRippleEffect } from '../withRippleEffect';
import { getContainedButtonContainerProps } from './container';
import { getContainedButtonRippleColor } from './getContainedButtonRippleColor';
import { containedStaticButtonTheme } from './staticTheme';

export const containedAnimatedButtonTheme: OptionalButtonVariantTheme = {
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

export const containedButtonTheme: OptionalButtonVariantTheme = merge<
  {},
  OptionalButtonVariantTheme,
  OptionalButtonVariantTheme
>({}, containedStaticButtonTheme, containedAnimatedButtonTheme);
