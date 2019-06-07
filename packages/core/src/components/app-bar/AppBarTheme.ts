/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ComponentThemeGetter } from '../ComponentThemeGetter';
import { SurfaceTheme } from '../surface/SurfaceTheme';
import { RfxTextTheme } from '../text/RfxTextTheme';
import { ViewTheme } from '../view/ViewTheme';
import { AppBarProps } from './AppBarProps';

export interface AppBarTheme {
  readonly centerArea?: ViewTheme<AppBarProps>;
  readonly leadingArea?: ViewTheme<AppBarProps>;
  readonly surface?: ComponentThemeGetter<AppBarProps, SurfaceTheme>;
  readonly title?: RfxTextTheme;
  readonly trailingArea?: ViewTheme<AppBarProps>;
}
