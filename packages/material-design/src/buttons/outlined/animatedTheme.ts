import { OptionalButtonTheme } from '@reflex-ui/core';
import merge from 'lodash/merge';

import { outlinedAnimatedButtonContainerTheme } from './animatedContainer';
import { outlinedButtonTheme } from './theme';

export const partialOutlinedAnimatedButtonTheme: OptionalButtonTheme = {
  container: outlinedAnimatedButtonContainerTheme,
};

export const outlinedAnimatedButtonTheme: OptionalButtonTheme = merge<
  {},
  OptionalButtonTheme,
  OptionalButtonTheme
>({}, outlinedButtonTheme, partialOutlinedAnimatedButtonTheme);
