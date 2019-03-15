/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PropsGetter } from '../PropsGetter';
import {
  TouchableSurfaceProps,
  TouchableSurfacePropsOptional,
} from './TouchableSurfaceProps';

export type TouchableSurfacePropsGetter<ComponentProps> = PropsGetter<
  ComponentProps,
  TouchableSurfaceProps
>;

export type TouchableSurfacePropsOptionalGetter<ComponentProps> = PropsGetter<
  ComponentProps,
  TouchableSurfacePropsOptional
>;
