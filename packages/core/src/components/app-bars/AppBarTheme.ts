/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ViewProps, ViewStyle } from 'react-native';

import {
  InjectableSubTheme,
  OptionalInjectableSubTheme,
} from '../subcomponents';
import { AppBarProps } from './AppBarProps';

export interface AppBarTheme {
  readonly centerArea: InjectableSubTheme<AppBarProps, ViewProps, ViewStyle>;
  readonly container: InjectableSubTheme<AppBarProps, ViewProps, ViewStyle>;
  readonly leadingArea: InjectableSubTheme<AppBarProps, ViewProps, ViewStyle>;
  readonly trailingArea: InjectableSubTheme<AppBarProps, ViewProps, ViewStyle>;
}

export interface OptionalAppBarTheme {
  readonly centerArea?: OptionalInjectableSubTheme<
    AppBarProps,
    ViewProps,
    ViewStyle
  >;
  readonly container?: OptionalInjectableSubTheme<
    AppBarProps,
    ViewProps,
    ViewStyle
  >;
  readonly leadingArea?: OptionalInjectableSubTheme<
    AppBarProps,
    ViewProps,
    ViewStyle
  >;
  readonly trailingArea?: OptionalInjectableSubTheme<
    AppBarProps,
    ViewProps,
    ViewStyle
  >;
}
