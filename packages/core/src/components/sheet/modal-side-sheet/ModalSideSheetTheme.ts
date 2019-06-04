/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ComponentThemeGetter } from '../../ComponentThemeGetter';
import { ModalTheme } from '../../modal/ModalTheme';
import { SurfaceTheme } from '../../surface/SurfaceTheme';
import { ModalSideSheetProps } from './ModalSideSheetProps';

export interface ModalSideSheetTheme {
  readonly modal?: ComponentThemeGetter<ModalSideSheetProps, ModalTheme>;
  readonly surface?: ComponentThemeGetter<ModalSideSheetProps, SurfaceTheme>;
}
