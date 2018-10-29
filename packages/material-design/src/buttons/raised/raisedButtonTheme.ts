import {
  DefaultButtonContainer,
  OptionalButtonVariantTheme,
} from '@reflex-ui/core';
import merge from 'lodash/merge';

import { ElevationDegree } from '../../elevation/ElevationDegree';
import { containedButtonTheme } from '../contained/containedButtonTheme';
import { withRaiseEffect } from '../withRaiseEffect';
import { withRippleEffect } from '../withRippleEffect';

const partialRaisedButtonTheme: OptionalButtonVariantTheme = {
  subComponents: {
    Container: withRippleEffect(
      withRaiseEffect(ElevationDegree.LOW)(DefaultButtonContainer),
    ),
  },
};

export const raisedButtonTheme: OptionalButtonVariantTheme = merge<
  {},
  OptionalButtonVariantTheme,
  OptionalButtonVariantTheme
>({}, containedButtonTheme, partialRaisedButtonTheme);
