/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { BuiltInTouchableChildTheme } from '../touchable/TouchableChildTheme';
import { BuiltInViewChildTheme } from '../view/ViewChildTheme';
import { TouchableSurfaceProps } from './TouchableSurfaceProps';

export interface TouchableSurfaceTheme {
  readonly container: BuiltInViewChildTheme<TouchableSurfaceProps>;
  readonly touchable: BuiltInTouchableChildTheme<TouchableSurfaceProps>;
}
