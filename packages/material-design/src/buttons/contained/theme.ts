import { OptionalButtonTheme } from '@reflex-ui/core';

import { containedButtonContainerTheme } from './container';
import {
  containedButtonLeadingIconTheme,
  containedButtonTrailingIconTheme,
} from './sideIcons';
import { containedButtonTextTheme } from './text';

export const containedButtonTheme: OptionalButtonTheme = {
  container: containedButtonContainerTheme,
  leadingIcon: containedButtonLeadingIconTheme,
  text: containedButtonTextTheme,
  trailingIcon: containedButtonTrailingIconTheme,
};
