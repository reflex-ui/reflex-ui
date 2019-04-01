/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { InteractionStateProps } from '../../interaction';
import { ComponentChildrenProps } from '../ComponentChildrenProps';
import { ComponentThemeProps } from '../ComponentThemeProps';
import { RfxViewPropsBase } from '../view/RfxViewProps';
import { SurfaceTheme } from './SurfaceTheme';

export type SurfacePropsBase = RfxViewPropsBase & InteractionStateProps;

export interface SurfaceProps
  extends ComponentChildrenProps<SurfaceProps>,
    ComponentThemeProps<SurfaceProps, SurfaceTheme>,
    SurfacePropsBase {}

export type SurfacePropsOptional = Partial<SurfaceProps>;
