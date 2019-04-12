/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { InteractionProps } from '../../interaction';
import { ComponentChildrenProps } from '../ComponentChildrenProps';
import { ComponentThemeProps } from '../ComponentThemeProps';
import { SurfacePropsBase } from '../surface/SurfaceProps';
import { TouchableSurfaceTheme } from './TouchableSurfaceTheme';

export type TouchableSurfacePropsBase = InteractionProps & SurfacePropsBase;

export type TouchableSurfacePropsBaseOptional = Partial<
  TouchableSurfacePropsBase
>;

export interface TouchableSurfaceProps
  extends ComponentChildrenProps<TouchableSurfaceProps>,
    ComponentThemeProps<TouchableSurfaceProps, TouchableSurfaceTheme>,
    TouchableSurfacePropsBase {}

export type TouchableSurfacePropsOptional = Partial<TouchableSurfaceProps>;
