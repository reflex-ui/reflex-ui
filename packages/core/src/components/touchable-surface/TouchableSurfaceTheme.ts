/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ComplexComponentTheme } from '../ComplexComponentTheme';
import { PropsGetter } from '../PropsGetter';
import { BuiltInTouchableTheme } from '../touchable/TouchableTheme';
import { BuiltInViewTheme } from '../view/ViewTheme';
import {
  TouchableSurfaceProps,
  TouchableSurfacePropsOptional,
} from './TouchableSurfaceProps';

export interface TouchableSurfaceTheme extends ComplexComponentTheme {
  readonly container?: BuiltInViewTheme<TouchableSurfaceProps>;
  readonly getProps?: PropsGetter<
    TouchableSurfaceProps,
    TouchableSurfacePropsOptional
  >;
  readonly touchable?: BuiltInTouchableTheme<TouchableSurfaceProps>;
}
