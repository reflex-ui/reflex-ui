import {
  ButtonSubName,
  DefaultButtonContainer,
  OptionalButtonVariantTheme,
} from '@reflex-ui/core';
import merge from 'lodash/merge';

import { withRippleEffect } from '../withRippleEffect';
import { getDefaultButtonContainerProps } from './container';
import { getDefaultButtonRippleColor } from './getDefaultButtonRippleColor';
import { defaultStaticButtonTheme } from './staticTheme';

export const defaultAnimatedButtonTheme: OptionalButtonVariantTheme = {
  [ButtonSubName.CONTAINER]: {
    allSizes: {
      pressed: {
        getProps: getDefaultButtonContainerProps,
      },
    },
  },
  subComponents: {
    [ButtonSubName.CONTAINER]: withRippleEffect({
      getRippleColor: getDefaultButtonRippleColor,
    })(DefaultButtonContainer),
  },
};

export const defaultButtonTheme: OptionalButtonVariantTheme = merge<
  {},
  OptionalButtonVariantTheme,
  OptionalButtonVariantTheme
>({}, defaultStaticButtonTheme, defaultAnimatedButtonTheme);
