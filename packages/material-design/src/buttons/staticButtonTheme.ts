import { OptionalButtonTheme } from '@reflex-ui/core';
import {
  allVariantsStaticButtonTheme,
  containedStaticButtonTheme,
  defaultStaticButtonTheme,
  fabStaticButtonTheme,
  iconStaticButtonTheme,
  outlinedStaticButtonTheme,
  raisedStaticButtonTheme,
  shapedStaticButtonTheme,
  xfabStaticButtonTheme,
} from './';

export const staticButtonTheme: OptionalButtonTheme = {
  allVariants: allVariantsStaticButtonTheme,
  contained: containedStaticButtonTheme,
  default: defaultStaticButtonTheme,
  fab: fabStaticButtonTheme,
  highlighted: raisedStaticButtonTheme,
  icon: iconStaticButtonTheme,
  outlined: outlinedStaticButtonTheme,
  shaped: shapedStaticButtonTheme,
  xfab: xfabStaticButtonTheme,
};
