/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ComplexComponentTheme } from '../ComplexComponentTheme';
import { BuiltInViewChildTheme } from '../view/ViewChildTheme';
import { AppBarProps } from './AppBarProps';
import { AppBarPropsOptionalGetter } from './AppBarPropsGetter';

export interface AppBarTheme extends ComplexComponentTheme {
  readonly centerArea?: BuiltInViewChildTheme<AppBarProps>;
  readonly container?: BuiltInViewChildTheme<AppBarProps>;
  readonly getProps?: AppBarPropsOptionalGetter<AppBarProps>;
  readonly leadingArea?: BuiltInViewChildTheme<AppBarProps>;
  readonly trailingArea?: BuiltInViewChildTheme<AppBarProps>;
}
