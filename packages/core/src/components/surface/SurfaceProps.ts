/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ElevationProps } from '../../elevation';
import { InteractionProps } from '../../interaction';
import { RfxViewPropsBase } from '../view/RfxViewProps';
import { SurfaceTheme } from './SurfaceTheme';

export interface SurfacePropsBase<Props, Theme>
  extends RfxViewPropsBase<Props, Theme>,
    ElevationProps,
    InteractionProps {}

export type SurfacePropsBaseOptional<Props, Theme> = Partial<
  SurfacePropsBase<Props, Theme>
>;

export interface SurfaceProps
  extends SurfacePropsBase<SurfaceProps, SurfaceTheme> {}

export type SurfacePropsOptional = Partial<SurfaceProps>;
