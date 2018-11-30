/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { TextProps } from 'react-native';
import { PrimitiveTheme } from '../PrimitiveTheme';

export type TextTheme<ComponentProps> = PrimitiveTheme<
  ComponentProps,
  TextProps
>;

export type OptionalTextTheme<ComponentProps> = Partial<
  TextTheme<ComponentProps>
>;
