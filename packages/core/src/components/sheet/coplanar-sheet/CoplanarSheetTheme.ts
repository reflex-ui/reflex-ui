/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ComponentTheme } from '../../ComponentTheme';
import { ComponentThemeGetter } from '../../ComponentThemeGetter';
import { SurfaceTheme } from '../../surface/SurfaceTheme';
import {
  CoplanarSheetProps,
  CoplanarSheetPropsOptional,
} from './CoplanarSheetProps';

export interface CoplanarSheetTheme
  extends ComponentTheme<CoplanarSheetProps, CoplanarSheetPropsOptional> {
  readonly surface?: ComponentThemeGetter<CoplanarSheetProps, SurfaceTheme>;
}
