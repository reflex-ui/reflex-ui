import { OptionalButtonTheme } from '@reflex-ui/core';
import merge from 'lodash/merge';

import { fabAnimatedButtonContainerTheme } from './animatedContainer';
import { fabButtonTheme } from './theme';

export const partialAnimatedFabButtonTheme: OptionalButtonTheme = {
  container: fabAnimatedButtonContainerTheme,
};

export const fabAnimatedButtonTheme: OptionalButtonTheme = merge<
  {},
  OptionalButtonTheme,
  OptionalButtonTheme
>({}, fabButtonTheme, partialAnimatedFabButtonTheme);
