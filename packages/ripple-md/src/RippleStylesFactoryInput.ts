/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ViewStyle } from 'react-native';
import { Position2D } from './Position2D';

export interface RippleStylesFactoryInput {
  readonly color: string;
  readonly diameter: number;
  readonly position: Position2D;
  readonly style: ViewStyle;
}
