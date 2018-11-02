import {
  // DefaultButtonContainer,
  OptionalButtonVariantTheme,
} from '@reflex-ui/core';
import merge from 'lodash/merge';

// import { withRippleEffect } from '../withRippleEffect';
import { outlinedStaticButtonTheme } from './outlinedStaticButtonTheme';

const partialOutlinedButtonTheme: OptionalButtonVariantTheme = {
  /*subComponents: {
    Container: withRippleEffect(DefaultButtonContainer),
  },*/
};

export const outlinedButtonTheme: OptionalButtonVariantTheme = merge<
  {},
  OptionalButtonVariantTheme,
  OptionalButtonVariantTheme
>({}, outlinedStaticButtonTheme, partialOutlinedButtonTheme);
