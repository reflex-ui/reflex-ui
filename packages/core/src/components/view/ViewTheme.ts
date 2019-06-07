/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ViewProps, ViewStyle } from 'react-native';
import { PrimitiveComponentTheme } from '../PrimitiveComponentTheme';

export type ViewTheme<ComponentProps> = PrimitiveComponentTheme<
  ComponentProps,
  ViewProps,
  ViewStyle
>;
