/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';

import { PaletteThemeProps } from '../../palette/PaletteThemeProps';
import { DimensionsProps } from '../../responsiveness/DimensionsProps';
import { ResponsivenessProps } from '../../responsiveness/ResponsivenessProps';
import { SizingProps } from '../../sizing/SizingProps';
import { ComponentThemeGetter } from '../ComponentThemeGetter';
import { ListItemTheme } from './ListItemTheme';

export interface ListItemProps
  extends DimensionsProps,
    PaletteThemeProps,
    ResponsivenessProps,
    SizingProps {
  readonly children?:
    | React.ReactNode
    | ((props: ListItemProps) => React.ReactNode);
  readonly getPatchTheme?: ComponentThemeGetter<ListItemProps, ListItemTheme>;
  readonly theme: ListItemTheme;
}

export type ListItemPropsOptional = Partial<ListItemProps>;
