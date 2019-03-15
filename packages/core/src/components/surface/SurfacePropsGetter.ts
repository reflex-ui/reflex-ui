/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PropsGetter } from '../PropsGetter';
import { SurfaceProps, SurfacePropsOptional } from './SurfaceProps';

export type SurfacePropsGetter<ComponentProps> = PropsGetter<
  ComponentProps,
  SurfaceProps
>;

export type SurfacePropsOptionalGetter<ComponentProps> = PropsGetter<
  ComponentProps,
  SurfacePropsOptional
>;
