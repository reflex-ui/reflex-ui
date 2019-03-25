/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { BuiltInViewTheme } from '../view/ViewTheme';
import { AppBarProps } from './AppBarProps';

export interface AppBarTheme {
  readonly centerArea?: BuiltInViewTheme<AppBarProps>;
  readonly container?: BuiltInViewTheme<AppBarProps>;
  readonly leadingArea?: BuiltInViewTheme<AppBarProps>;
  readonly trailingArea?: BuiltInViewTheme<AppBarProps>;
}
