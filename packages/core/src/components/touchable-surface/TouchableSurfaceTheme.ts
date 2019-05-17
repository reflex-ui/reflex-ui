/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ComponentThemeGetter } from '../ComponentThemeGetter';
import { SurfaceTheme } from '../surface/SurfaceTheme';
// tslint:disable-next-line:max-line-length
import { BuiltInTouchableWithoutFeedbackTheme } from '../touchable/TouchableWithoutFeedbackTheme';
import { TouchableSurfaceProps } from './TouchableSurfaceProps';

export interface TouchableSurfaceTheme {
  readonly surface?: ComponentThemeGetter<TouchableSurfaceProps, SurfaceTheme>;
  readonly touchable?: BuiltInTouchableWithoutFeedbackTheme<
    TouchableSurfaceProps
  >;
}
