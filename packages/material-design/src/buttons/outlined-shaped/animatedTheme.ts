import { OptionalButtonTheme } from '@reflex-ui/core';
import merge from 'lodash/merge';

// tslint:disable-next-line:max-line-length
import { outlinedAnimatedButtonContainerTheme } from '../outlined/animatedContainer';
import { outlinedShapedButtonTheme } from './theme';

export const partialOutlinedShapedAnimatedButtonTheme: OptionalButtonTheme = {
  container: outlinedAnimatedButtonContainerTheme,
};

export const outlinedShapedAnimatedButtonTheme: OptionalButtonTheme = merge<
  {},
  OptionalButtonTheme,
  OptionalButtonTheme
>({}, outlinedShapedButtonTheme, partialOutlinedShapedAnimatedButtonTheme);
