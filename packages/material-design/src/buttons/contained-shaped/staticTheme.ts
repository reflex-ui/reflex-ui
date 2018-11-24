import { OptionalButtonTheme } from '@reflex-ui/core';
import merge from 'lodash/merge';

import { containedStaticButtonTheme } from '../contained/staticTheme';
import { containedShapedStaticButtonContainerTheme } from './container';

const partialContainedShapedStaticButtonTheme: OptionalButtonTheme = {
  container: containedShapedStaticButtonContainerTheme,
};

// tslint:disable-next-line:max-line-length
export const containedShapedStaticButtonTheme: OptionalButtonTheme = merge<
  {},
  OptionalButtonTheme,
  OptionalButtonTheme
>({}, containedStaticButtonTheme, partialContainedShapedStaticButtonTheme);
