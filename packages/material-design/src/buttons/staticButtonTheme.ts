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
  containedRaised: raisedStaticButtonTheme,
  default: defaultStaticButtonTheme,
  fab: fabStaticButtonTheme,
  icon: iconStaticButtonTheme,
  outlined: outlinedStaticButtonTheme,
  shaped: shapedStaticButtonTheme,
  xfab: xfabStaticButtonTheme,
};
