import {
  DefaultButtonContainer,
  OptionalButtonVariantTheme,
} from '@reflex-ui/core';
import merge from 'lodash/merge';
import { containedButtonTheme } from '../contained/containedButtonTheme';
import { withRaiseEffect } from '../withRaiseEffect';
import { withRippleEffect } from '../withRippleEffect';

const optionalRaisedButtonTheme: OptionalButtonVariantTheme = {
  subComponents: {
    Container: withRippleEffect(withRaiseEffect(DefaultButtonContainer)),
  },
};

export const raisedButtonTheme: OptionalButtonVariantTheme = merge<
  {},
  OptionalButtonVariantTheme,
  OptionalButtonVariantTheme
>({}, containedButtonTheme, optionalRaisedButtonTheme);
