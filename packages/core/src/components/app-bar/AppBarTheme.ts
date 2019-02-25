/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ViewProps, ViewStyle } from 'react-native';

import {
  InjectableSubTheme,
  InjectableSubThemeOptional,
} from '../subcomponents';
import { AppBarProps } from './AppBarProps';

export interface AppBarTheme {
  readonly centerArea: InjectableSubTheme<AppBarProps, ViewProps, ViewStyle>;
  readonly container: InjectableSubTheme<AppBarProps, ViewProps, ViewStyle>;
  readonly leadingArea: InjectableSubTheme<AppBarProps, ViewProps, ViewStyle>;
  readonly trailingArea: InjectableSubTheme<AppBarProps, ViewProps, ViewStyle>;
}

export interface AppBarThemeOptional {
  readonly centerArea?: InjectableSubThemeOptional<
    AppBarProps,
    ViewProps,
    ViewStyle
  >;
  readonly container?: InjectableSubThemeOptional<
    AppBarProps,
    ViewProps,
    ViewStyle
  >;
  readonly leadingArea?: InjectableSubThemeOptional<
    AppBarProps,
    ViewProps,
    ViewStyle
  >;
  readonly trailingArea?: InjectableSubThemeOptional<
    AppBarProps,
    ViewProps,
    ViewStyle
  >;
}
