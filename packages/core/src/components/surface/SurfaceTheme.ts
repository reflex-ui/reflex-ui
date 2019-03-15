/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ComplexComponentTheme } from '../ComplexComponentTheme';
import { BuiltInViewChildTheme } from '../view/ViewChildTheme';
import { SurfaceProps } from './SurfaceProps';
import { SurfacePropsOptionalGetter } from './SurfacePropsGetter';

export interface SurfaceTheme extends ComplexComponentTheme {
  readonly container?: BuiltInViewChildTheme<SurfaceProps>;
  readonly getProps?: SurfacePropsOptionalGetter<SurfaceProps>;
}
