import {
  DefaultButtonContainer,
  OptionalButtonVariantTheme,
} from '@reflex-ui/core';
import merge from 'lodash/merge';

import { getDefaultButtonRippleColor } from '../default/';
import { withRippleEffect } from '../withRippleEffect';
import { getHoveredOutlinedButtonContainerProps } from './';
import { outlinedStaticButtonTheme } from './outlinedStaticButtonTheme';

const partialOutlinedButtonTheme: OptionalButtonVariantTheme = {
  allSizes: {
    pressed: {
      container: {
        getProps: getHoveredOutlinedButtonContainerProps,
      },
    },
  },
  subComponents: {
    Container: withRippleEffect({
      getRippleColor: getDefaultButtonRippleColor,
    })(DefaultButtonContainer),
  },
};

export const outlinedButtonTheme: OptionalButtonVariantTheme = merge<
  {},
  OptionalButtonVariantTheme,
  OptionalButtonVariantTheme
>({}, outlinedStaticButtonTheme, partialOutlinedButtonTheme);
