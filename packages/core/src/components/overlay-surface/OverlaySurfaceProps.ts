/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { SurfacePropsBase } from '../surface/SurfaceProps';
import { OverlaySurfaceTheme } from './OverlaySurfaceTheme';

export interface OverlaySurfacePropsBase<Props, Theme>
  extends SurfacePropsBase<Props, Theme> {}

export type OverlaySurfacePropsBaseOptional<Props, Theme> = Partial<
  OverlaySurfacePropsBase<Props, Theme>
>;

export interface OverlaySurfaceProps
  extends OverlaySurfacePropsBase<OverlaySurfaceProps, OverlaySurfaceTheme> {}

export type OverlaySurfacePropsOptional = Partial<OverlaySurfaceProps>;
