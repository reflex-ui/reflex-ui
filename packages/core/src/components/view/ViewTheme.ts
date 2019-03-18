/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ViewProps, ViewStyle } from 'react-native';

import {
  BuiltInSimpleComponentTheme,
  SimpleComponentTheme,
} from '../SimpleComponentTheme';

export type ViewTheme<ComponentProps> = SimpleComponentTheme<
  ComponentProps,
  ViewProps,
  ViewStyle
>;

export type BuiltInViewTheme<ComponentProps> = BuiltInSimpleComponentTheme<
  ComponentProps,
  ViewProps,
  ViewStyle
>;
