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
// prettier-ignore
import {
  containedShapedStaticButtonTheme,
} from './containedShapedStaticButtonTheme';

const partialContainedShapedButtonTheme: OptionalButtonVariantTheme = {
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

export const containedShapedButtonTheme: OptionalButtonVariantTheme = merge<
  {},
  OptionalButtonVariantTheme,
  OptionalButtonVariantTheme
>({}, containedShapedStaticButtonTheme, partialContainedShapedButtonTheme);
