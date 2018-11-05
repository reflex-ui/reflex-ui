import {
  DefaultButtonContainer,
  OptionalButtonVariantTheme,
} from '@reflex-ui/core';
import merge from 'lodash/merge';

import {
  getContainedButtonRippleColor,
  getHoveredContainedButtonContainerProps,
} from '../contained';
import { withRippleEffect } from '../withRippleEffect';
import { shapedStaticButtonTheme } from './shapedStaticButtonTheme';

const partialShapedButtonTheme: OptionalButtonVariantTheme = {
  allSizes: {
    pressed: {
      container: {
        getProps: getHoveredContainedButtonContainerProps,
      },
    },
  },
  subComponents: {
    Container: withRippleEffect({
      getRippleColor: getContainedButtonRippleColor,
    })(DefaultButtonContainer),
  },
};

export const shapedButtonTheme: OptionalButtonVariantTheme = merge<
  {},
  OptionalButtonVariantTheme,
  OptionalButtonVariantTheme
>({}, shapedStaticButtonTheme, partialShapedButtonTheme);
