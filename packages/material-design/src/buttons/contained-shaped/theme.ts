import { OptionalButtonTheme } from '@reflex-ui/core';
import merge from 'lodash/merge';

import { containedButtonTheme } from '../contained/theme';
import { containedShapedButtonContainerTheme } from './container';

const partialContainedShapedButtonTheme: OptionalButtonTheme = {
  container: containedShapedButtonContainerTheme,
};

// tslint:disable-next-line:max-line-length
export const containedShapedButtonTheme: OptionalButtonTheme = merge<
  {},
  OptionalButtonTheme,
  OptionalButtonTheme
>({}, containedButtonTheme, partialContainedShapedButtonTheme);
