/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { ComponentChildrenProps } from '../ComponentChildrenProps';
import { ComponentThemeProps } from '../ComponentThemeProps';
import { SurfacePropsBase } from '../surface/SurfaceProps';
import { ListTheme } from './ListTheme';

export interface ListProps
  extends ComponentChildrenProps<ListProps>,
    ComponentThemeProps<ListProps, ListTheme>,
    SurfacePropsBase {}

export type ListPropsOptional = Partial<ListProps>;
