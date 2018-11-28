import { OptionalButtonTheme } from '@reflex-ui/core';
import merge from 'lodash/merge';

import { containedButtonTheme } from '../contained/theme';
import {
  defaultButtonLeadingIconTheme,
  defaultButtonTrailingIconTheme,
} from '../default/sideIcons';
import { outlinedButtonContainerTheme } from './container';
import { outlinedButtonTextTheme } from './text';

export const partialOutlinedButtonTheme: OptionalButtonTheme = {
  container: outlinedButtonContainerTheme,
  leadingIcon: defaultButtonLeadingIconTheme,
  text: outlinedButtonTextTheme,
  trailingIcon: defaultButtonTrailingIconTheme,
};

export const outlinedButtonTheme: OptionalButtonTheme = merge<
  {},
  OptionalButtonTheme,
  OptionalButtonTheme
>({}, containedButtonTheme, partialOutlinedButtonTheme);
