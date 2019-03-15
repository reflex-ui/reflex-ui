/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ComplexComponentTheme } from '../ComplexComponentTheme';
import { BuiltInTouchableChildTheme } from '../touchable/TouchableChildTheme';
import { BuiltInViewChildTheme } from '../view/ViewChildTheme';
import { TouchableSurfaceProps } from './TouchableSurfaceProps';
// tslint:disable-next-line:max-line-length
import { TouchableSurfacePropsOptionalGetter } from './TouchableSurfacePropsGetter';

export interface TouchableSurfaceTheme extends ComplexComponentTheme {
  readonly container?: BuiltInViewChildTheme<TouchableSurfaceProps>;
  readonly getProps?: TouchableSurfacePropsOptionalGetter<
    TouchableSurfaceProps
  >;
  readonly touchable?: BuiltInTouchableChildTheme<TouchableSurfaceProps>;
}
