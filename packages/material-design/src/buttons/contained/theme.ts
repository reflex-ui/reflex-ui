/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

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
