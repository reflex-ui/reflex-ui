import {
  // DefaultButtonContainer,
  OptionalButtonVariantTheme,
} from '@reflex-ui/core';
import merge from 'lodash/merge';

// import { ElevationDegree } from '../../elevation/ElevationDegree';
// import { withRaiseEffect } from '../withRaiseEffect';
// import { withRippleEffect } from '../withRippleEffect';
import { xfabStaticButtonTheme } from './xfabStaticButtonTheme';

export const partialXFabButtonTheme: OptionalButtonVariantTheme = {
  /*subComponents: {
    Container: withRippleEffect(
      withRaiseEffect(ElevationDegree.MID)(DefaultButtonContainer),
    ),
  },*/
};

export const xfabButtonTheme: OptionalButtonVariantTheme = merge<
  {},
  OptionalButtonVariantTheme,
  OptionalButtonVariantTheme
>({}, xfabStaticButtonTheme, partialXFabButtonTheme);
