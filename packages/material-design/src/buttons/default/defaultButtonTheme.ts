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

export const partialDefaultButtonTheme: OptionalButtonVariantTheme = {
  allSizes: {
    pressed: {
      container: {
        getProps: getHoveredDefaultButtonContainerProps,
      },
    },
  },
  subComponents: {
    Container: withRippleEffect(DefaultButtonContainer),
  },
};

export const defaultButtonTheme: OptionalButtonVariantTheme = merge<
  {},
  OptionalButtonVariantTheme,
  OptionalButtonVariantTheme
>({}, defaultStaticButtonTheme, partialDefaultButtonTheme);
