import { OptionalButtonTheme } from '@reflex-ui/core';
import merge from 'lodash/merge';

import { defaultAnimatedButtonContainerTheme } from './animatedContainer';
import { defaultButtonTheme } from './theme';

export const partialDefaultAnimatedButtonTheme: OptionalButtonTheme = {
  container: defaultAnimatedButtonContainerTheme,
};

export const defaultAnimatedButtonTheme: OptionalButtonTheme = merge<
  {},
  OptionalButtonTheme,
  OptionalButtonTheme
>({}, defaultButtonTheme, partialDefaultAnimatedButtonTheme);
