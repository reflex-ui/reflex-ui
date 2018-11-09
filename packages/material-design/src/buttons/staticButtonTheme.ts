import { OptionalButtonTheme } from '@reflex-ui/core';
import {
  allVariantsStaticButtonTheme,
  containedShapedStaticButtonTheme,
  containedStaticButtonTheme,
  defaultStaticButtonTheme,
  fabStaticButtonTheme,
  iconStaticButtonTheme,
  outlinedStaticButtonTheme,
  raisedStaticButtonTheme,
  xfabStaticButtonTheme,
} from './';

export const staticButtonTheme: OptionalButtonTheme = {
  allVariants: allVariantsStaticButtonTheme,
  contained: containedStaticButtonTheme,
  containedShaped: containedShapedStaticButtonTheme,
  default: defaultStaticButtonTheme,
  fab: fabStaticButtonTheme,
  highlighted: raisedStaticButtonTheme,
  icon: iconStaticButtonTheme,
  outlined: outlinedStaticButtonTheme,
  xfab: xfabStaticButtonTheme,
};
