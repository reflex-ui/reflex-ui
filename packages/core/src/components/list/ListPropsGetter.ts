/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PropsGetter } from '../PropsGetter';
import { ListProps, ListPropsOptional } from './ListProps';

export type ListPropsGetter<ComponentProps> = PropsGetter<
  ComponentProps,
  ListProps
>;

export type ListPropsOptionalGetter<ComponentProps> = PropsGetter<
  ComponentProps,
  ListPropsOptional
>;
