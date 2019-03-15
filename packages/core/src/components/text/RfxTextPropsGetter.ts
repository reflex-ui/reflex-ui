/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PropsGetter } from '../PropsGetter';
import { RfxTextProps, RfxTextPropsOptional } from './RfxTextProps';

export type RfxTextPropsGetter<ComponentProps> = PropsGetter<
  ComponentProps,
  RfxTextProps
>;

export type RfxTextPropsOptionalGetter<ComponentProps> = PropsGetter<
  ComponentProps,
  RfxTextPropsOptional
>;
