import { OptionalButtonTheme } from '@reflex-ui/core';
import merge from 'lodash/merge';

import { xfabAnimatedButtonContainerTheme } from './animatedContainer';
import { xfabButtonTheme } from './theme';

export const partialXFabAnimatedButtonTheme: OptionalButtonTheme = {
  container: xfabAnimatedButtonContainerTheme,
};

export const xfabAnimatedButtonTheme: OptionalButtonTheme = merge<
  {},
  OptionalButtonTheme,
  OptionalButtonTheme
>({}, xfabButtonTheme, partialXFabAnimatedButtonTheme);
