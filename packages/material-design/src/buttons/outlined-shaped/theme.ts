import {
  ButtonSubName,
  DefaultViewSubcomponent,
  OptionalButtonVariantTheme,
} from '@reflex-ui/core';
import merge from 'lodash/merge';

// tslint:disable-next-line:max-line-length
import { getDefaultButtonRippleColor } from '../default/getDefaultButtonRippleColor';
import { getOutlinedButtonContainerProps } from '../outlined/container';
import { withRippleEffect } from '../withRippleEffect';
import { outlinedShapedStaticButtonTheme } from './staticTheme';

export const outlinedShapedAnimatedButtonTheme: OptionalButtonVariantTheme = {
  [ButtonSubName.CONTAINER]: {
    allSizes: {
      pressed: {
        getProps: getOutlinedButtonContainerProps,
      },
    },
  },
  subcomponents: {
    [ButtonSubName.CONTAINER]: withRippleEffect({
      getRippleColor: getDefaultButtonRippleColor,
    })(DefaultViewSubcomponent),
  },
};

export const outlinedShapedButtonTheme: OptionalButtonVariantTheme = merge<
  {},
  OptionalButtonVariantTheme,
  OptionalButtonVariantTheme
>({}, outlinedShapedStaticButtonTheme, outlinedShapedAnimatedButtonTheme);
