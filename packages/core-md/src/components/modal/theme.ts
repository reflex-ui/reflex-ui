/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ModalElementTheme, ModalTheme } from '@reflex-ui/core';

export const getModalContainerTheme = (): ModalElementTheme => ({
  webInlineStyle: 'display: flex;',
});

export const getModalRootTheme = (): ModalElementTheme => ({
  webInlineStyle: 'z-index: 999;',
});

export const modalTheme: ModalTheme = {
  container: getModalContainerTheme(),
  root: getModalRootTheme(),
};
