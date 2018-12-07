/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ButtonTheme,
  rawInjectableButtonTouchableSubTheme,
  rawInjectableButtonViewSubTheme,
} from '@reflex-ui/core';

import { containedButtonContainerTheme } from './container';
import { containedButtonIconTheme } from './icon';
import {
  containedButtonLeadingIconContainerTheme,
  containedButtonTrailingIconContainerTheme,
} from './sideIconContainers';
import {
  containedButtonLeadingIconTheme,
  containedButtonTrailingIconTheme,
} from './sideIcons';
import { containedButtonTextTheme } from './text';

export const containedButtonTheme: ButtonTheme = {
  container: containedButtonContainerTheme,
  icon: containedButtonIconTheme,
  iconContainer: rawInjectableButtonViewSubTheme,
  leadingIcon: containedButtonLeadingIconTheme,
  leadingIconContainer: containedButtonLeadingIconContainerTheme,
  text: containedButtonTextTheme,
  touchable: rawInjectableButtonTouchableSubTheme,
  trailingIcon: containedButtonTrailingIconTheme,
  trailingIconContainer: containedButtonTrailingIconContainerTheme,
};
