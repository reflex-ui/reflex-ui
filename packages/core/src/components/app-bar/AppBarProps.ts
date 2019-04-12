/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ComponentChildrenProps } from '../ComponentChildrenProps';
import { ComponentThemeProps } from '../ComponentThemeProps';
import { SurfacePropsBase } from '../surface/SurfaceProps';
import { AppBarTheme } from './AppBarTheme';
import { AppBarVariant } from './AppBarVariant';

export interface AppBarPropsBase extends SurfacePropsBase {
  readonly variant: AppBarVariant;
}

export type AppBarPropsBaseOptional = Partial<AppBarPropsBase>;

export interface AppBarProps
  extends ComponentChildrenProps<AppBarProps>,
    ComponentThemeProps<AppBarProps, AppBarTheme>,
    AppBarPropsBase {}

export type AppBarPropsOptional = Partial<AppBarProps>;
