/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';

import { BuiltInChildTheme, ChildTheme } from '../children/ChildTheme';

export type SvgChildTheme<ComponentProps> = ChildTheme<
  ComponentProps,
  SvgProps,
  ViewStyle
>;

export type BuiltInSvgChildTheme<ComponentProps> = BuiltInChildTheme<
  ComponentProps,
  SvgProps,
  ViewStyle
>;
