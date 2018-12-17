/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Breakpoints } from './Breakpoints';
import { DimensionsInfo } from './DimensionsInfo';

export interface DimensionsProps {
  readonly breakpoints: Breakpoints;
  readonly dimensions: DimensionsInfo;
}
