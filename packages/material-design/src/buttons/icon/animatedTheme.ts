import { OptionalButtonTheme } from '@reflex-ui/core';
import merge from 'lodash/merge';

import { iconAnimatedButtonContainerTheme } from './animatedContainer';
import { iconButtonTheme } from './theme';

const optionalIconAnimatedButtonTheme: OptionalButtonTheme = {
  container: iconAnimatedButtonContainerTheme,
};

export const iconAnimatedButtonTheme: OptionalButtonTheme = merge<
  {},
  OptionalButtonTheme,
  OptionalButtonTheme
>({}, iconButtonTheme, optionalIconAnimatedButtonTheme);
