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
import { FlexSvgProps } from './FlexSvgProps';

export interface FlexSvgTheme {
  readonly container: InjectableSubTheme<FlexSvgProps, ViewProps, ViewStyle>;
  readonly svg: SubTheme<FlexSvgProps, SvgProps, ViewStyle>;
}

export interface OptionalFlexSvgTheme {
  readonly container?: OptionalInjectableSubTheme<
    FlexSvgProps,
    ViewProps,
    ViewStyle
  >;
  readonly svg?: OptionalSubTheme<FlexSvgProps, SvgProps, ViewStyle>;
}
