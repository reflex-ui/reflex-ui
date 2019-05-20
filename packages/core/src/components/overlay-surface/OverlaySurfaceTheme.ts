/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { BuiltInViewTheme } from '../view/ViewTheme';
import { OverlaySurfaceProps } from './OverlaySurfaceProps';

export interface OverlaySurfaceTheme {
  readonly container?: BuiltInViewTheme<OverlaySurfaceProps>;
  readonly surface?: BuiltInViewTheme<OverlaySurfaceProps>;
}
