/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ViewProps, ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';

import {
  InjectableSubTheme,
  OptionalInjectableSubTheme,
  OptionalSubTheme,
  SubTheme,
} from '../subcomponents';
import { SuperIconProps } from './SuperIconProps';

export interface SuperIconTheme {
  readonly container: InjectableSubTheme<SuperIconProps, ViewProps, ViewStyle>;
  readonly icon: SubTheme<SuperIconProps, SvgProps, ViewProps>;
}

export interface OptionalSuperIconTheme {
  readonly container?: OptionalInjectableSubTheme<
    SuperIconProps,
    ViewProps,
    ViewStyle
  >;
  readonly icon?: OptionalSubTheme<SuperIconProps, SvgProps, ViewProps>;
}
