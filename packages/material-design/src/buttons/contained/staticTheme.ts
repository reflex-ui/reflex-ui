import { OptionalButtonTheme } from '@reflex-ui/core';

import { containedStaticButtonContainerTheme } from './container';
import {
  containedStaticButtonLeadingIconTheme,
  containedStaticButtonTrailingIconTheme,
} from './sideIcons';
import { containedStaticButtonTextTheme } from './text';

export const containedStaticButtonTheme: OptionalButtonTheme = {
  container: containedStaticButtonContainerTheme,
  leadingIcon: containedStaticButtonLeadingIconTheme,
  text: containedStaticButtonTextTheme,
  trailingIcon: containedStaticButtonTrailingIconTheme,
};
