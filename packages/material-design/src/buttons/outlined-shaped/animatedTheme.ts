import { OptionalButtonTheme } from '@reflex-ui/core';
import merge from 'lodash/merge';

// tslint:disable-next-line:max-line-length
import { outlinedShapedAnimatedButtonContainerTheme } from './animatedContainer';
import { outlinedShapedButtonTheme } from './theme';

export const partialOutlinedShapedAnimatedButtonTheme: OptionalButtonTheme = {
  container: outlinedShapedAnimatedButtonContainerTheme,
};

export const outlinedShapedAnimatedButtonTheme: OptionalButtonTheme = merge<
  {},
  OptionalButtonTheme,
  OptionalButtonTheme
>({}, outlinedShapedButtonTheme, partialOutlinedShapedAnimatedButtonTheme);
