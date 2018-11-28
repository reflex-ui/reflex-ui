import { OptionalButtonTheme } from '@reflex-ui/core';

import { defaultButtonContainerTheme } from './container';
import {
  defaultButtonLeadingIconContainerTheme,
  defaultButtonTrailingIconContainerTheme,
} from './sideIconContainers';
import {
  defaultButtonLeadingIconTheme,
  defaultButtonTrailingIconTheme,
} from './sideIcons';
import { defaultButtonTextTheme } from './text';

export const defaultButtonTheme: OptionalButtonTheme = {
  container: defaultButtonContainerTheme,
  leadingIcon: defaultButtonLeadingIconTheme,
  leadingIconContainer: defaultButtonLeadingIconContainerTheme,
  text: defaultButtonTextTheme,
  trailingIcon: defaultButtonTrailingIconTheme,
  trailingIconContainer: defaultButtonTrailingIconContainerTheme,
};
