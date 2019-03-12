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
import { SizingPropsOptional } from '../../sizing/SizingProps';
import { ListChildrenPropsGetter } from './ListChildrenPropsGetter';
import { ListTheme } from './ListTheme';

export interface ListProps
  extends DimensionsProps,
    PaletteThemeProps,
    ResponsivenessProps,
    SizingPropsOptional {
  readonly children?: React.ReactNode | ((props: ListProps) => React.ReactNode);
  readonly getChildrenProps?: ListChildrenPropsGetter;
  readonly theme: ListTheme;
}

export type ListPropsOptional = Partial<ListProps>;
