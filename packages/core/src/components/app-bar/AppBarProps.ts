/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { SurfacePropsBase } from '../surface/SurfaceProps';
import { AppBarTheme } from './AppBarTheme';
import { AppBarVariant } from './AppBarVariant';

export interface AppBarProps
  extends SurfacePropsBase<AppBarProps, AppBarTheme> {
  readonly variant: AppBarVariant;
}

export type AppBarPropsOptional = Partial<AppBarProps>;
