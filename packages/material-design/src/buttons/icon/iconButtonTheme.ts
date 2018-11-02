import {
  // DefaultButtonContainer,
  OptionalButtonVariantTheme,
} from '@reflex-ui/core';
import merge from 'lodash/merge';

// import { withRippleEffect } from '../withRippleEffect';
import { iconStaticButtonTheme } from './iconStaticButtonTheme';

const optionalIconButtonTheme: OptionalButtonVariantTheme = {
  /*subComponents: {
    Container: withRippleEffect(DefaultButtonContainer),
  },*/
};

export const iconButtonTheme: OptionalButtonVariantTheme = merge<
  {},
  OptionalButtonVariantTheme,
  OptionalButtonVariantTheme
>({}, iconStaticButtonTheme, optionalIconButtonTheme);
