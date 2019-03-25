/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { BuiltInTouchableTheme } from '../touchable/TouchableTheme';
import { BuiltInViewTheme } from '../view/ViewTheme';
import { TouchableSurfaceProps } from './TouchableSurfaceProps';

export interface TouchableSurfaceTheme {
  readonly container?: BuiltInViewTheme<TouchableSurfaceProps>;
  readonly touchable?: BuiltInTouchableTheme<TouchableSurfaceProps>;
}
