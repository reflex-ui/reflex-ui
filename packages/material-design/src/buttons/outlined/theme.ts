/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

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
