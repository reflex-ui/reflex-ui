import {
  ButtonSubName,
  DefaultButtonContainer,
  OptionalButtonVariantTheme,
} from '@reflex-ui/core';
import merge from 'lodash/merge';

// tslint:disable-next-line:max-line-length
import { getDefaultButtonRippleColor } from '../default/getDefaultButtonRippleColor';
import { withRippleEffect } from '../withRippleEffect';
import { getOutlinedButtonContainerProps } from './container';
import { outlinedStaticButtonTheme } from './staticTheme';

export const outlinedAnimatedButtonTheme: OptionalButtonVariantTheme = {
  [ButtonSubName.CONTAINER]: {
    allSizes: {
      pressed: {
        getProps: getOutlinedButtonContainerProps,
      },
    },
  },
  subComponents: {
    [ButtonSubName.CONTAINER]: withRippleEffect({
      getRippleColor: getDefaultButtonRippleColor,
    })(DefaultButtonContainer),
  },
};

export const outlinedButtonTheme: OptionalButtonVariantTheme = merge<
  {},
  OptionalButtonVariantTheme,
  OptionalButtonVariantTheme
>({}, outlinedStaticButtonTheme, outlinedAnimatedButtonTheme);
