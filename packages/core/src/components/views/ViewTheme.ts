/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ViewProps } from 'react-native';
import { PrimitiveTheme } from '../PrimitiveTheme';

export type ViewTheme<ComponentProps> = PrimitiveTheme<
  ComponentProps,
  ViewProps
>;

export type OptionalViewTheme<ComponentProps> = Partial<
  ViewTheme<ComponentProps>
>;
