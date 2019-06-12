/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ComponentTheme } from '../../ComponentTheme';
import { ComponentThemeGetter } from '../../ComponentThemeGetter';
import { ModalTheme } from '../../modal/ModalTheme';
import { SurfaceTheme } from '../../surface/SurfaceTheme';
import { ModalSheetProps, ModalSheetPropsOptional } from './ModalSheetProps';

export interface ModalSheetTheme
  extends ComponentTheme<ModalSheetProps, ModalSheetPropsOptional> {
  readonly modal?: ComponentThemeGetter<ModalSheetProps, ModalTheme>;
  readonly surface?: ComponentThemeGetter<ModalSheetProps, SurfaceTheme>;
}
