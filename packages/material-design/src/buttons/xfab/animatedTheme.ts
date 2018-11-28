import { OptionalButtonTheme } from '@reflex-ui/core';
import merge from 'lodash/merge';

import { fabAnimatedButtonContainerTheme } from '../fab/animatedContainer';
import { xfabButtonTheme } from './theme';

export const partialXFabAnimatedButtonTheme: OptionalButtonTheme = {
  container: fabAnimatedButtonContainerTheme,
};

export const xfabAnimatedButtonTheme: OptionalButtonTheme = merge<
  {},
  OptionalButtonTheme,
  OptionalButtonTheme
>({}, xfabButtonTheme, partialXFabAnimatedButtonTheme);
