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
import { MarginProps } from '../../spacing/MarginProps';
import { PaddingProps } from '../../spacing/PaddingProps';
import { SuperViewSubPropsGetter } from './SuperViewSubPropsGetter';
import { SuperViewTheme } from './SuperViewTheme';

export interface SuperViewProps
  extends DimensionsProps,
    MarginProps,
    PaddingProps,
    PaletteThemeProps,
    ResponsivenessProps {
  readonly children?:
    | React.ReactNode
    | ((props: SuperViewProps) => React.ReactNode);
  readonly flex?: number;
  readonly getProps?: SuperViewSubPropsGetter;
  readonly theme: SuperViewTheme;
}

export type OptionalSuperViewProps = Partial<SuperViewProps>;
