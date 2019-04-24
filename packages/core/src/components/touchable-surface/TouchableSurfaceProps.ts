/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { InteractionProps } from '../../interaction';
import { SurfacePropsBase } from '../surface/SurfaceProps';
import { TouchableSurfaceTheme } from './TouchableSurfaceTheme';

export type TouchableSurfacePropsBase<Props, Theme> = InteractionProps &
  SurfacePropsBase<Props, Theme>;

export type TouchableSurfacePropsBaseOptional<Props, Theme> = Partial<
  TouchableSurfacePropsBase<Props, Theme>
>;

export interface TouchableSurfaceProps
  extends TouchableSurfacePropsBase<
    TouchableSurfaceProps,
    TouchableSurfaceTheme
  > {}

export type TouchableSurfacePropsOptional = Partial<TouchableSurfaceProps>;
