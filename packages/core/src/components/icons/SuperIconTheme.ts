/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { TextProps, TextStyle, ViewProps, ViewStyle } from 'react-native';

import {
  InjectableSubTheme,
  OptionalInjectableSubTheme,
  OptionalSubTheme,
  SubTheme,
} from '../subcomponents';
import { SuperIconProps } from './SuperIconProps';

export interface SuperIconTheme {
  readonly container: InjectableSubTheme<SuperIconProps, ViewProps, ViewStyle>;
  readonly icon: SubTheme<SuperIconProps, TextProps, TextStyle>;
}

export interface OptionalSuperIconTheme {
  readonly container?: OptionalInjectableSubTheme<
    SuperIconProps,
    ViewProps,
    ViewStyle
  >;
  readonly icon?: OptionalSubTheme<SuperIconProps, TextProps, TextStyle>;
}
