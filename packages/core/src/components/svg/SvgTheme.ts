/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';

import { PrimitiveComponentTheme } from '../PrimitiveComponentTheme';

export type SvgTheme<ComponentProps> = PrimitiveComponentTheme<
  ComponentProps,
  SvgProps,
  ViewStyle
>;
