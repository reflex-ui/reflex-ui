import {
  DefaultButtonContainer,
  OptionalButtonVariantTheme,
} from '@reflex-ui/core';
import merge from 'lodash/merge';

import { withRippleEffect } from '../withRippleEffect';
import { containedStaticButtonTheme } from './containedStaticButtonTheme';

export const partialContainedButtonTheme: OptionalButtonVariantTheme = {
  subComponents: {
    Container: withRippleEffect(DefaultButtonContainer),
  },
};

export const containedButtonTheme: OptionalButtonVariantTheme = merge<
  {},
  OptionalButtonVariantTheme,
  OptionalButtonVariantTheme
>({}, containedStaticButtonTheme, partialContainedButtonTheme);
