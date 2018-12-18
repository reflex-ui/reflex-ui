/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';

import { MarginProps } from '../../margin';
import { PaletteThemeProps } from '../../palette/PaletteThemeProps';
import { DimensionsProps } from '../../responsiveness/DimensionsProps';
import { ResponsivenessProps } from '../../responsiveness/ResponsivenessProps';
import { SurfaceSubPropsGetter } from './SurfaceSubPropsGetter';
import { SurfaceTheme } from './SurfaceTheme';

export interface SurfaceProps
  extends DimensionsProps,
    MarginProps,
    PaletteThemeProps,
    ResponsivenessProps {
  readonly children?:
    | React.ReactNode
    | ((props: SurfaceProps) => React.ReactNode);
  readonly getProps?: SurfaceSubPropsGetter;
  readonly theme: SurfaceTheme;
}

export type OptionalSurfaceProps = Partial<SurfaceProps>;
