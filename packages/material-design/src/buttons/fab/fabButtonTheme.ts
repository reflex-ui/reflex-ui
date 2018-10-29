import {
  DefaultButtonContainer,
  OptionalButtonVariantTheme,
} from '@reflex-ui/core';
import merge from 'lodash/merge';

import { ElevationDegree } from '../../elevation/ElevationDegree';
import { withRaiseEffect } from '../withRaiseEffect';
import { withRippleEffect } from '../withRippleEffect';
import { fabStaticButtonTheme } from './fabStaticButtonTheme';

export const partialFabButtonTheme: OptionalButtonVariantTheme = {
  subComponents: {
    Container: withRippleEffect(
      withRaiseEffect(ElevationDegree.MID)(DefaultButtonContainer),
    ),
  },
};

export const fabButtonTheme: OptionalButtonVariantTheme = merge<
  {},
  OptionalButtonVariantTheme,
  OptionalButtonVariantTheme
>({}, fabStaticButtonTheme, partialFabButtonTheme);
