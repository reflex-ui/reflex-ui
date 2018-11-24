import { OptionalButtonTheme } from '@reflex-ui/core';
import merge from 'lodash/merge';

import { outlinedStaticButtonTheme } from '../outlined/staticTheme';
import { outlinedShapedStaticButtonContainerTheme } from './container';

export const partialOutlinedShapedStaticButtonTheme: OptionalButtonTheme = {
  container: outlinedShapedStaticButtonContainerTheme,
};

export const outlinedShapedStaticButtonTheme: OptionalButtonTheme = merge<
  {},
  OptionalButtonTheme,
  OptionalButtonTheme
>({}, outlinedStaticButtonTheme, partialOutlinedShapedStaticButtonTheme);
