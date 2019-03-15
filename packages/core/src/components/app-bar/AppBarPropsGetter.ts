/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PropsGetter } from '../PropsGetter';
import { AppBarProps, AppBarPropsOptional } from './AppBarProps';

export type AppBarPropsGetter<ComponentProps> = PropsGetter<
  ComponentProps,
  AppBarProps
>;

export type AppBarPropsOptionalGetter<ComponentProps> = PropsGetter<
  ComponentProps,
  AppBarPropsOptional
>;
