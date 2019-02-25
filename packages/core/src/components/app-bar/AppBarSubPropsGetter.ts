/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { AppBarProps } from './AppBarProps';
import { AppBarSubProps } from './AppBarSubProps';

export type AppBarSubPropsGetter = (props: AppBarProps) => AppBarSubProps;
