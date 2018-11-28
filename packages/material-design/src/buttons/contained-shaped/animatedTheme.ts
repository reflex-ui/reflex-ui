import { OptionalButtonTheme } from '@reflex-ui/core';
import merge from 'lodash/merge';

// tslint:disable-next-line:max-line-length
import { containedShapedAnimatedButtonContainerTheme } from './animatedContainer';
import { containedShapedButtonTheme } from './theme';

export const partialContainedShapedAnimatedButtonTheme: OptionalButtonTheme = {
  container: containedShapedAnimatedButtonContainerTheme,
};

export const containedShapedAnimatedButtonTheme: OptionalButtonTheme = merge<
  {},
  OptionalButtonTheme,
  OptionalButtonTheme
>({}, containedShapedButtonTheme, partialContainedShapedAnimatedButtonTheme);
