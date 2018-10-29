import {
  DefaultButtonContainer,
  OptionalButtonVariantTheme,
} from '@reflex-ui/core';
import merge from 'lodash/merge';

import { withRippleEffect } from '../withRippleEffect';
import { defaultStaticButtonTheme } from './defaultStaticButtonTheme';

export const partialDefaultButtonTheme: OptionalButtonVariantTheme = {
  subComponents: {
    Container: withRippleEffect(DefaultButtonContainer),
  },
};

export const defaultButtonTheme: OptionalButtonVariantTheme = merge<
  {},
  OptionalButtonVariantTheme,
  OptionalButtonVariantTheme
>({}, defaultStaticButtonTheme, partialDefaultButtonTheme);
