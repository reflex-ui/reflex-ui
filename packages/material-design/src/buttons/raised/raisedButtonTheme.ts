import {
  DefaultButtonContainer,
  OptionalButtonVariantTheme,
} from '@reflex-ui/core';
import merge from 'lodash/merge';

import { ElevationDegree } from '../../elevation/ElevationDegree';
import { withRaiseEffect } from '../withRaiseEffect';
import { withRippleEffect } from '../withRippleEffect';
import { raisedStaticButtonTheme } from './raisedStaticButtonTheme';

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
>({}, raisedStaticButtonTheme, partialRaisedButtonTheme);
