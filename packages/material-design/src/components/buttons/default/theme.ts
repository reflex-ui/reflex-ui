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

import { defaultButtonContainerTheme } from './container';
import { defaultButtonIconTheme } from './icon';
import {
  defaultButtonLeadingIconContainerTheme,
  defaultButtonTrailingIconContainerTheme,
} from './sideIconContainers';
import {
  defaultButtonLeadingIconTheme,
  defaultButtonTrailingIconTheme,
} from './sideIcons';
import { defaultButtonTextTheme } from './text';

export const defaultButtonTheme: ButtonTheme = {
  container: defaultButtonContainerTheme,
  icon: defaultButtonIconTheme,
  iconContainer: rawInjectableButtonViewSubTheme,
  leadingIcon: defaultButtonLeadingIconTheme,
  leadingIconContainer: defaultButtonLeadingIconContainerTheme,
  text: defaultButtonTextTheme,
  touchable: rawInjectableButtonTouchableSubTheme,
  trailingIcon: defaultButtonTrailingIconTheme,
  trailingIconContainer: defaultButtonTrailingIconContainerTheme,
};
