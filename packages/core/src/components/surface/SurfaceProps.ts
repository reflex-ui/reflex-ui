/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ComponentChildrenProps } from '../ComponentChildrenProps';
import { ComponentThemeProps } from '../ComponentThemeProps';
import { RfxViewProps } from '../view/RfxViewProps';
import { SurfaceTheme } from './SurfaceTheme';

export interface SurfaceProps
  extends ComponentChildrenProps<SurfaceProps>,
    ComponentThemeProps<SurfaceProps, SurfaceTheme>,
    RfxViewProps {}

export type SurfacePropsOptional = Partial<SurfaceProps>;
