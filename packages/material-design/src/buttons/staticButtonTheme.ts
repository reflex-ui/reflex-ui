import { OptionalButtonVariantsTheme } from '@reflex-ui/core';
import {
  allVariantsStaticButtonTheme,
  containedShapedStaticButtonTheme,
  containedStaticButtonTheme,
  defaultStaticButtonTheme,
  fabStaticButtonTheme,
  iconStaticButtonTheme,
  outlinedShapedStaticButtonTheme,
  outlinedStaticButtonTheme,
  raisedStaticButtonTheme,
  xfabStaticButtonTheme,
} from './';

export const staticButtonTheme: OptionalButtonVariantsTheme = {
  allVariants: allVariantsStaticButtonTheme,
  contained: containedStaticButtonTheme,
  containedShaped: containedShapedStaticButtonTheme,
  default: defaultStaticButtonTheme,
  fab: fabStaticButtonTheme,
  highlighted: raisedStaticButtonTheme,
  icon: iconStaticButtonTheme,
  outlined: outlinedStaticButtonTheme,
  outlinedShaped: outlinedShapedStaticButtonTheme,
  xfab: xfabStaticButtonTheme,
};
