/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ComponentTheme } from '../ComponentTheme';
import { ComponentThemeGetter } from '../ComponentThemeGetter';
import { SurfaceTheme } from '../surface/SurfaceTheme';
import { ViewTheme } from '../view/ViewTheme';
import {
  OverlaySurfaceProps,
  OverlaySurfacePropsOptional,
} from './OverlaySurfaceProps';

export interface OverlaySurfaceTheme
  extends ComponentTheme<OverlaySurfaceProps, OverlaySurfacePropsOptional> {
  readonly container?: ViewTheme<OverlaySurfaceProps>;
  readonly surface?: ComponentThemeGetter<OverlaySurfaceProps, SurfaceTheme>;
}
