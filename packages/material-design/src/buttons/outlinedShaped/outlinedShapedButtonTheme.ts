import {
  DefaultButtonContainer,
  OptionalButtonVariantTheme,
} from '@reflex-ui/core';
import merge from 'lodash/merge';

import { getDefaultButtonRippleColor } from '../default/';
import { getHoveredOutlinedButtonContainerProps } from '../outlined';
import { withRippleEffect } from '../withRippleEffect';
// prettier-ignore
import {
  outlinedShapedStaticButtonTheme,
} from './outlinedShapedStaticButtonTheme';

const partialOutlinedShapedButtonTheme: OptionalButtonVariantTheme = {
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

export const outlinedShapedButtonTheme: OptionalButtonVariantTheme = merge<
  {},
  OptionalButtonVariantTheme,
  OptionalButtonVariantTheme
>({}, outlinedShapedStaticButtonTheme, partialOutlinedShapedButtonTheme);
