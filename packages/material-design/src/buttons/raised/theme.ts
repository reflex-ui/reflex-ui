import { OptionalButtonTheme } from '@reflex-ui/core';
import merge from 'lodash/merge';

import { containedButtonTheme } from '../contained/theme';
import { raisedButtonContainerTheme } from './container';

export const partialRaisedButtonTheme: OptionalButtonTheme = {
  container: raisedButtonContainerTheme,
};

export const raisedButtonTheme: OptionalButtonTheme = merge<
  {},
  OptionalButtonTheme,
  OptionalButtonTheme
>({}, containedButtonTheme, partialRaisedButtonTheme);
