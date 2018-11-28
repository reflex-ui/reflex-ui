import { OptionalButtonTheme } from '@reflex-ui/core';
import merge from 'lodash/merge';

import { fabButtonTheme } from '../fab/theme';
import { xfabButtonContainerTheme } from './container';
import {
  xfabButtonLeadingIconContainerTheme,
  xfabButtonTrailingIconContainerTheme,
} from './sideIconContainers';
import {
  xfabButtonLeadingIconTheme,
  xfabButtonTrailingIconTheme,
} from './sideIcons';

export const partialXFabButtonTheme: OptionalButtonTheme = {
  container: xfabButtonContainerTheme,
  leadingIcon: xfabButtonLeadingIconTheme,
  leadingIconContainer: xfabButtonLeadingIconContainerTheme,
  trailingIcon: xfabButtonTrailingIconTheme,
  trailingIconContainer: xfabButtonTrailingIconContainerTheme,
};

export const xfabButtonTheme: OptionalButtonTheme = merge<
  {},
  OptionalButtonTheme,
  OptionalButtonTheme
>({}, fabButtonTheme, partialXFabButtonTheme);
