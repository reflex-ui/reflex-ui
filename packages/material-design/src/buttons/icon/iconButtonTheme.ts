import {
  DefaultButtonContainer,
  OptionalButtonVariantTheme,
} from '@reflex-ui/core';
import merge from 'lodash/merge';

import {
  getDefaultButtonRippleColor,
  getHoveredDefaultButtonContainerProps,
} from '../default';
import { withRippleEffect } from '../withRippleEffect';
import { iconStaticButtonTheme } from './iconStaticButtonTheme';

const optionalIconButtonTheme: OptionalButtonVariantTheme = {
  allSizes: {
    pressed: {
      container: {
        getProps: getHoveredDefaultButtonContainerProps,
      },
    },
  },
  subComponents: {
    Container: withRippleEffect({
      getRippleColor: getDefaultButtonRippleColor,
    })(DefaultButtonContainer),
  },
};

export const iconButtonTheme: OptionalButtonVariantTheme = merge<
  {},
  OptionalButtonVariantTheme,
  OptionalButtonVariantTheme
>({}, iconStaticButtonTheme, optionalIconButtonTheme);
