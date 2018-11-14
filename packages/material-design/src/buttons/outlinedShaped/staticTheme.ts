import { ButtonSubName, OptionalButtonVariantTheme } from '@reflex-ui/core';
import merge from 'lodash/merge';

import { outlinedStaticButtonTheme } from '../outlined/staticTheme';
import { outlinedShapedStaticButtonContainerTheme } from './container';

// tslint:disable-next-line:max-line-length
export const partialOutlinedShapedStaticButtonTheme: OptionalButtonVariantTheme = {
  [ButtonSubName.CONTAINER]: outlinedShapedStaticButtonContainerTheme,
};

// tslint:disable-next-line:max-line-length
export const outlinedShapedStaticButtonTheme: OptionalButtonVariantTheme = merge<
  {},
  OptionalButtonVariantTheme,
  OptionalButtonVariantTheme
>({}, outlinedStaticButtonTheme, partialOutlinedShapedStaticButtonTheme);
