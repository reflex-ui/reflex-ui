import { OptionalButtonVariantTheme } from '@reflex-ui/core';
import merge from 'lodash/merge';

import { containedStaticButtonTheme } from '../contained/staticTheme';
import { containedShapedStaticButtonContainerTheme } from './container';

const partialContainedShapedStaticButtonTheme: OptionalButtonVariantTheme = {
  container: containedShapedStaticButtonContainerTheme,
};

// tslint:disable-next-line:max-line-length
export const containedShapedStaticButtonTheme: OptionalButtonVariantTheme = merge<
  {},
  OptionalButtonVariantTheme,
  OptionalButtonVariantTheme
>({}, containedStaticButtonTheme, partialContainedShapedStaticButtonTheme);
