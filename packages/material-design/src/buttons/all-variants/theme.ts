/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { OptionalButtonTheme } from '@reflex-ui/core';

import { allVariantsButtonContainerTheme } from './container';
import { allVariantsButtonIconTheme } from './icon';
import {
  allVariantsButtonLeadingIconContainerTheme,
  allVariantsButtonTrailingIconContainerTheme,
} from './sideIconContainers';
import {
  allVariantsButtonLeadingIconTheme,
  allVariantsButtonTrailingIconTheme,
} from './sideIcons';
import { allVariantsButtonTextTheme } from './text';

export const allVariantsButtonTheme: OptionalButtonTheme = {
  container: allVariantsButtonContainerTheme,
  icon: allVariantsButtonIconTheme,
  leadingIcon: allVariantsButtonLeadingIconTheme,
  leadingIconContainer: allVariantsButtonLeadingIconContainerTheme,
  text: allVariantsButtonTextTheme,
  trailingIcon: allVariantsButtonTrailingIconTheme,
  trailingIconContainer: allVariantsButtonTrailingIconContainerTheme,
};
