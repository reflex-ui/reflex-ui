/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';

import { InteractionProps } from '../../interaction';
import { PaletteThemeProps } from '../../palette/PaletteThemeProps';
import { DimensionsProps } from '../../responsiveness/DimensionsProps';
import { ResponsivenessProps } from '../../responsiveness/ResponsivenessProps';
import { ComponentThemeGetter } from '../ComponentThemeGetter';
import { TouchableSurfaceTheme } from './TouchableSurfaceTheme';

export interface TouchableSurfaceProps
  extends DimensionsProps,
    InteractionProps,
    PaletteThemeProps,
    ResponsivenessProps {
  readonly children?:
    | React.ReactNode
    | ((props: TouchableSurfaceProps) => React.ReactNode);
  readonly getPatchTheme?: ComponentThemeGetter<
    TouchableSurfaceProps,
    TouchableSurfaceTheme
  >;
  readonly theme: TouchableSurfaceTheme;
}

export type TouchableSurfacePropsOptional = Partial<TouchableSurfaceProps>;
