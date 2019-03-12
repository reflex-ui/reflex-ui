/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { TextProps, TextStyle } from 'react-native';
import { BuiltInChildTheme, ChildTheme } from '../children/ChildTheme';

export type TextChildTheme<ComponentProps> = ChildTheme<
  ComponentProps,
  TextProps,
  TextStyle
>;

export type BuiltInTextChildTheme<ComponentProps> = BuiltInChildTheme<
  ComponentProps,
  TextProps,
  TextStyle
>;
