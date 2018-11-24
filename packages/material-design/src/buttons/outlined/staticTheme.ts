import { OptionalButtonTheme } from '@reflex-ui/core';
import merge from 'lodash/merge';

import { containedStaticButtonTheme } from '../contained/staticTheme';
import {
  defaultStaticButtonLeadingIconTheme,
  defaultStaticButtonTrailingIconTheme,
} from '../default/sideIcons';
import { outlinedStaticButtonContainerTheme } from './container';
import { outlinedStaticButtonTextTheme } from './text';

export const partialOutlinedStaticButtonTheme: OptionalButtonTheme = {
  container: outlinedStaticButtonContainerTheme,
  leadingIcon: defaultStaticButtonLeadingIconTheme,
  text: outlinedStaticButtonTextTheme,
  trailingIcon: defaultStaticButtonTrailingIconTheme,
};

export const outlinedStaticButtonTheme: OptionalButtonTheme = merge<
  {},
  OptionalButtonTheme,
  OptionalButtonTheme
>({}, containedStaticButtonTheme, partialOutlinedStaticButtonTheme);
