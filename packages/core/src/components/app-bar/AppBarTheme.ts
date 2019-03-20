/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Function1 } from '../../utils-ts/Function1';
import { ComplexComponentTheme } from '../ComplexComponentTheme';
import { BuiltInViewTheme } from '../view/ViewTheme';
import { AppBarProps, AppBarPropsOptional } from './AppBarProps';

export interface AppBarTheme extends ComplexComponentTheme {
  readonly centerArea?: BuiltInViewTheme<AppBarProps>;
  readonly container?: BuiltInViewTheme<AppBarProps>;
  readonly getProps?: Function1<AppBarProps, AppBarPropsOptional>;
  readonly leadingArea?: BuiltInViewTheme<AppBarProps>;
  readonly trailingArea?: BuiltInViewTheme<AppBarProps>;
}
