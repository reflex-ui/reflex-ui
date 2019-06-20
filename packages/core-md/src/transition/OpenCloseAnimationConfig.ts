/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { SpringConfig } from 'react-spring';

export interface OpenCloseAnimationConfig {
  readonly closeAnimationConfig?: SpringConfig;
  readonly openAnimationConfig?: SpringConfig;
}
