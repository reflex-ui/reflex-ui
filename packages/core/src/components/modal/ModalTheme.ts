/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { BackdropTheme } from '../backdrop/BackdropTheme';
import { ComponentTheme } from '../ComponentTheme';
import { ComponentThemeGetter } from '../ComponentThemeGetter';
import { ModalElementTheme } from './ModalElementTheme';
import { ModalProps, ModalPropsOptional } from './ModalProps';

export interface ModalTheme
  extends ComponentTheme<ModalProps, ModalPropsOptional> {
  readonly backdrop?: ComponentThemeGetter<ModalProps, BackdropTheme>;
  readonly container?: ModalElementTheme;
  readonly root?: ModalElementTheme;
}
