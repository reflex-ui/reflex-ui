/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PropsGetter } from '../PropsGetter';
import { RfxSvgProps, RfxSvgPropsOptional } from './RfxSvgProps';

export type RfxSvgPropsGetter<ComponentProps> = PropsGetter<
  ComponentProps,
  RfxSvgProps
>;

export type RfxSvgPropsOptionalGetter<ComponentProps> = PropsGetter<
  ComponentProps,
  RfxSvgPropsOptional
>;
