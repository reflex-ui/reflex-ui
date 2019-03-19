/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { InteractionProps } from '../../interaction';
import { PaletteThemeProps } from '../../palette/PaletteThemeProps';
import { DimensionsProps } from '../../responsiveness/DimensionsProps';
import { ResponsivenessProps } from '../../responsiveness/ResponsivenessProps';
import { ComponentChildrenProps } from '../ComponentChildrenProps';
import { ComponentThemeProps } from '../ComponentThemeProps';
import { TouchableSurfaceTheme } from './TouchableSurfaceTheme';

export interface TouchableSurfaceProps
  extends ComponentChildrenProps<TouchableSurfaceProps>,
    ComponentThemeProps<TouchableSurfaceProps, TouchableSurfaceTheme>,
    DimensionsProps,
    InteractionProps,
    PaletteThemeProps,
    ResponsivenessProps {}

export type TouchableSurfacePropsOptional = Partial<TouchableSurfaceProps>;
