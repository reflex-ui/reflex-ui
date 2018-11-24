import { OptionalButtonTheme } from '@reflex-ui/core';

import { defaultStaticButtonContainerTheme } from './container';
import {
  defaultStaticButtonLeadingIconContainerTheme,
  defaultStaticButtonTrailingIconContainerTheme,
} from './sideIconContainers';
import {
  defaultStaticButtonLeadingIconTheme,
  defaultStaticButtonTrailingIconTheme,
} from './sideIcons';
import { defaultStaticButtonTextTheme } from './text';

export const defaultStaticButtonTheme: OptionalButtonTheme = {
  container: defaultStaticButtonContainerTheme,
  leadingIcon: defaultStaticButtonLeadingIconTheme,
  leadingIconContainer: defaultStaticButtonLeadingIconContainerTheme,
  text: defaultStaticButtonTextTheme,
  trailingIcon: defaultStaticButtonTrailingIconTheme,
  trailingIconContainer: defaultStaticButtonTrailingIconContainerTheme,
};
