/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PropsGetter } from '../PropsGetter';
import { ListItemProps, ListItemPropsOptional } from './ListItemProps';

export type ListItemPropsGetter<ComponentProps> = PropsGetter<
  ComponentProps,
  ListItemProps
>;

export type ListItemPropsOptionalGetter<ComponentProps> = PropsGetter<
  ComponentProps,
  ListItemPropsOptional
>;
