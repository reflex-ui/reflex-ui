import { ButtonSubName, OptionalButtonTheme } from '@reflex-ui/core';
import merge from 'lodash/merge';

import { outlinedStaticButtonTheme } from '../outlined/staticTheme';
import { outlinedShapedStaticButtonContainerTheme } from './container';

// tslint:disable-next-line:max-line-length
export const partialOutlinedShapedStaticButtonTheme: OptionalButtonTheme = {
  [ButtonSubName.CONTAINER]: outlinedShapedStaticButtonContainerTheme,
};

// tslint:disable-next-line:max-line-length
export const outlinedShapedStaticButtonTheme: OptionalButtonTheme = merge<
  {},
  OptionalButtonTheme,
  OptionalButtonTheme
>({}, outlinedStaticButtonTheme, partialOutlinedShapedStaticButtonTheme);
