/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { AppBarChildrenProps } from './AppBarChildrenProps';
import { AppBarProps } from './AppBarProps';

export type AppBarChildrenPropsGetter = (
  props: AppBarProps,
) => AppBarChildrenProps;
