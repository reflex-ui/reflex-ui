/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { BackdropTheme } from '../backdrop/BackdropTheme';
import { ComponentThemeGetter } from '../ComponentThemeGetter';
import { ModalProps } from './ModalProps';

export interface ModalTheme {
  readonly backdrop?: ComponentThemeGetter<ModalProps, BackdropTheme>;
}
