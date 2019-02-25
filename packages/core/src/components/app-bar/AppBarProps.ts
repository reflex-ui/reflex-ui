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
import { AppBarSubPropsGetter } from './AppBarSubPropsGetter';
import { AppBarTheme } from './AppBarTheme';
import { AppBarVariant } from './AppBarVariant';

export interface AppBarProps
  extends DimensionsProps,
    PaletteThemeProps,
    ResponsivenessProps {
  readonly children?:
    | React.ReactNode
    | ((props: AppBarProps) => React.ReactNode);
  readonly getSubProps?: AppBarSubPropsGetter;
  readonly theme: AppBarTheme;
  readonly variant: AppBarVariant;
}

export type AppBarPropsOptional = Partial<AppBarProps>;
