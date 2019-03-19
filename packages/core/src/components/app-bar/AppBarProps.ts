/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PaletteThemeProps } from '../../palette/PaletteThemeProps';
import { DimensionsProps } from '../../responsiveness/DimensionsProps';
import { ResponsivenessProps } from '../../responsiveness/ResponsivenessProps';
import { ComponentChildrenProps } from '../ComponentChildrenProps';
import { ComponentThemeProps } from '../ComponentThemeProps';
import { AppBarTheme } from './AppBarTheme';
import { AppBarVariant } from './AppBarVariant';

export interface AppBarProps
  extends ComponentChildrenProps<AppBarProps>,
    ComponentThemeProps<AppBarProps, AppBarTheme>,
    DimensionsProps,
    PaletteThemeProps,
    ResponsivenessProps {
  readonly variant: AppBarVariant;
}

export type AppBarPropsOptional = Partial<AppBarProps>;
