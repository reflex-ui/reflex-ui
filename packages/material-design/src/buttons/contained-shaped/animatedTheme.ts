import { OptionalButtonTheme } from '@reflex-ui/core';
import merge from 'lodash/merge';

// tslint:disable-next-line:max-line-length
import { containedAnimatedButtonContainerTheme } from '../contained/animatedContainer';
import { containedShapedButtonTheme } from './theme';

export const partialContainedShapedAnimatedButtonTheme: OptionalButtonTheme = {
  container: containedAnimatedButtonContainerTheme,
};

export const containedShapedAnimatedButtonTheme: OptionalButtonTheme = merge<
  {},
  OptionalButtonTheme,
  OptionalButtonTheme
>({}, containedShapedButtonTheme, partialContainedShapedAnimatedButtonTheme);
