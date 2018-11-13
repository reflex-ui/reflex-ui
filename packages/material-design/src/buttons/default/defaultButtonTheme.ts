import {
  DefaultButtonContainer,
  OptionalButtonVariantTheme,
} from '@reflex-ui/core';
import merge from 'lodash/merge';

import { withRippleEffect } from '../withRippleEffect';
// prettier-ignore
import {
  getHoveredDefaultButtonContainerProps,
} from './DefaultButtonContainerProps';
import { defaultStaticButtonTheme } from './defaultStaticButtonTheme';
import { getDefaultButtonRippleColor } from './getDefaultButtonRippleColor';

export const partialDefaultButtonTheme: OptionalButtonVariantTheme = {
  allSizes: {
    pressed: {
      container: {
        getProps: getHoveredDefaultButtonContainerProps,
      },
    },
  },
  subComponents: {
    container: withRippleEffect({
      getRippleColor: getDefaultButtonRippleColor,
    })(DefaultButtonContainer),
  },
};

export const defaultButtonTheme: OptionalButtonVariantTheme = merge<
  {},
  OptionalButtonVariantTheme,
  OptionalButtonVariantTheme
>({}, defaultStaticButtonTheme, partialDefaultButtonTheme);
