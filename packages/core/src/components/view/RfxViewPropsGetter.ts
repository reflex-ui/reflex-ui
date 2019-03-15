/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PropsGetter } from '../PropsGetter';
import { RfxViewProps, RfxViewPropsOptional } from './RfxViewProps';

export type RfxViewPropsGetter<ComponentProps> = PropsGetter<
  ComponentProps,
  RfxViewProps
>;

export type RfxViewPropsOptionalGetter<ComponentProps> = PropsGetter<
  ComponentProps,
  RfxViewPropsOptional
>;
