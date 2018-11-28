import { OptionalButtonTheme } from '@reflex-ui/core';
import merge from 'lodash/merge';

import { containedAnimatedButtonContainerTheme } from './animatedContainer';
import { containedButtonTheme } from './theme';

export const partialContainedAnimatedButtonTheme: OptionalButtonTheme = {
  container: containedAnimatedButtonContainerTheme,
};

export const containedAnimatedButtonTheme: OptionalButtonTheme = merge<
  {},
  OptionalButtonTheme,
  OptionalButtonTheme
>({}, containedButtonTheme, partialContainedAnimatedButtonTheme);
