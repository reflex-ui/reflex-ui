/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ComponentChildrenProps } from '../ComponentChildrenProps';
import { ComponentThemeProps } from '../ComponentThemeProps';
import { RfxViewPropsBase } from '../view/RfxViewProps';
import { ListItemTheme } from './ListItemTheme';

export interface ListItemProps
  extends ComponentChildrenProps<ListItemProps>,
    ComponentThemeProps<ListItemProps, ListItemTheme>,
    RfxViewPropsBase {}

export type ListItemPropsOptional = Partial<ListItemProps>;
