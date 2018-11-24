import { OptionalButtonTheme } from '@reflex-ui/core';
import merge from 'lodash/merge';

import { raisedStaticButtonTheme } from '../raised/staticTheme';
import { fabStaticButtonContainerTheme } from './container';
import { fabStaticButtonIconTheme } from './icon';

export const partialFabStaticButtonTheme: OptionalButtonTheme = {
  container: fabStaticButtonContainerTheme,
  icon: fabStaticButtonIconTheme,
};

export const fabStaticButtonTheme: OptionalButtonTheme = merge<
  {},
  OptionalButtonTheme,
  OptionalButtonTheme
>({}, raisedStaticButtonTheme, partialFabStaticButtonTheme);
