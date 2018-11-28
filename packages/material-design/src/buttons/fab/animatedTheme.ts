import { OptionalButtonTheme } from '@reflex-ui/core';
import merge from 'lodash/merge';

import { partialAnimatedFabButtonContainerTheme } from './animatedContainer';
import { fabButtonTheme } from './theme';

export const partialAnimatedFabButtonTheme: OptionalButtonTheme = {
  container: partialAnimatedFabButtonContainerTheme,
};

export const fabAnimatedButtonTheme: OptionalButtonTheme = merge<
  {},
  OptionalButtonTheme,
  OptionalButtonTheme
>({}, fabButtonTheme, partialAnimatedFabButtonTheme);
