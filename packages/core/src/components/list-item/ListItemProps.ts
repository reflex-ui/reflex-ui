/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ViewProps } from 'react-native';

import { PaletteThemeProps } from '../../palette/PaletteThemeProps';
import { DimensionsProps } from '../../responsiveness/DimensionsProps';
import { ResponsivenessProps } from '../../responsiveness/ResponsivenessProps';
import { SizingProps } from '../../sizing/SizingProps';
import { MarginProps } from '../../spacing/MarginProps';
import { PaddingProps } from '../../spacing/PaddingProps';
import { ComponentChildrenProps } from '../ComponentChildrenProps';
import { ComponentThemeProps } from '../ComponentThemeProps';
import { ListItemTheme } from './ListItemTheme';

export interface ListItemProps
  extends ComponentChildrenProps<ListItemProps>,
    ComponentThemeProps<ListItemProps, ListItemTheme>,
    DimensionsProps,
    MarginProps,
    PaddingProps,
    PaletteThemeProps,
    ResponsivenessProps,
    SizingProps,
    ViewProps {}

export type ListItemPropsOptional = Partial<ListItemProps>;
