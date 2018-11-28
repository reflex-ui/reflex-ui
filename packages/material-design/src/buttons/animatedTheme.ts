import { OptionalButtonVariantsTheme } from '@reflex-ui/core';
import {
  allVariantsAnimatedButtonTheme,
  containedAnimatedButtonTheme,
  containedShapedAnimatedButtonTheme,
  defaultAnimatedButtonTheme,
  fabAnimatedButtonTheme,
  iconAnimatedButtonTheme,
  outlinedAnimatedButtonTheme,
  outlinedShapedAnimatedButtonTheme,
  raisedAnimatedButtonTheme,
  xfabAnimatedButtonTheme,
} from './';

export const animatedButtonTheme: OptionalButtonVariantsTheme = {
  allVariants: allVariantsAnimatedButtonTheme,
  contained: containedAnimatedButtonTheme,
  containedShaped: containedShapedAnimatedButtonTheme,
  default: defaultAnimatedButtonTheme,
  fab: fabAnimatedButtonTheme,
  highlighted: raisedAnimatedButtonTheme,
  icon: iconAnimatedButtonTheme,
  outlined: outlinedAnimatedButtonTheme,
  outlinedShaped: outlinedShapedAnimatedButtonTheme,
  xfab: xfabAnimatedButtonTheme,
};
