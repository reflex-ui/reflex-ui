import { OptionalButtonTheme } from '@reflex-ui/core';
import merge from 'lodash/merge';

import { defaultStaticButtonTheme } from '../default/staticTheme';
import { iconStaticButtonContainerTheme } from './container';
import { iconStaticButtonIconTheme } from './icon';

export const partialStaticIconButtonTheme: OptionalButtonTheme = {
  container: iconStaticButtonContainerTheme,
  icon: iconStaticButtonIconTheme,
};

export const iconStaticButtonTheme: OptionalButtonTheme = merge<
  {},
  OptionalButtonTheme,
  OptionalButtonTheme
>({}, defaultStaticButtonTheme, partialStaticIconButtonTheme);
