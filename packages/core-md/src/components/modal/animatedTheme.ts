/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ModalTheme } from '@reflex-ui/core';

import { getModalContainerTheme, getModalRootTheme } from './theme';

export const animatedModalTheme: ModalTheme = {
  container: getModalContainerTheme(),
  getProps: () => ({ isOpenCloseTransitionAnimated: true }),
  root: getModalRootTheme(),
};
