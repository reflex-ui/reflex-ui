/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';

import {
  BuiltInSimpleComponentTheme,
  SimpleComponentTheme,
} from '../SimpleComponentTheme';

export type SvgTheme<ComponentProps> = SimpleComponentTheme<
  ComponentProps,
  SvgProps,
  ViewStyle
>;

export type BuiltInSvgTheme<ComponentProps> = BuiltInSimpleComponentTheme<
  ComponentProps,
  SvgProps,
  ViewStyle
>;
