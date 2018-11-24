import { OptionalButtonTheme } from '@reflex-ui/core';
import merge from 'lodash/merge';

import { fabStaticButtonTheme } from '../fab/staticTheme';
import { xfabStaticButtonContainerTheme } from './container';
import {
  xfabStaticButtonLeadingIconContainerTheme,
  xfabStaticButtonTrailingIconContainerTheme,
} from './sideIconContainers';
import {
  xfabStaticButtonLeadingIconTheme,
  xfabStaticButtonTrailingIconTheme,
} from './sideIcons';

export const partialXFabStaticButtonTheme: OptionalButtonTheme = {
  container: xfabStaticButtonContainerTheme,
  leadingIcon: xfabStaticButtonLeadingIconTheme,
  leadingIconContainer: xfabStaticButtonLeadingIconContainerTheme,
  trailingIcon: xfabStaticButtonTrailingIconTheme,
  trailingIconContainer: xfabStaticButtonTrailingIconContainerTheme,
};

export const xfabStaticButtonTheme: OptionalButtonTheme = merge<
  {},
  OptionalButtonTheme,
  OptionalButtonTheme
>({}, fabStaticButtonTheme, partialXFabStaticButtonTheme);
