/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { TextProps, TextStyle } from 'react-native';

import {
  BuiltInSimpleComponentTheme,
  SimpleComponentTheme,
} from '../SimpleComponentTheme';

export type TextTheme<ComponentProps> = SimpleComponentTheme<
  ComponentProps,
  TextProps,
  TextStyle
>;

export type BuiltInTextTheme<ComponentProps> = BuiltInSimpleComponentTheme<
  ComponentProps,
  TextProps,
  TextStyle
>;
