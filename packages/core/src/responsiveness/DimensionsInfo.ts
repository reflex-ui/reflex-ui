/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ScaledSize } from 'react-native';

export interface DimensionsInfo {
  readonly screen: ScaledSize;
  readonly window: ScaledSize;
}
