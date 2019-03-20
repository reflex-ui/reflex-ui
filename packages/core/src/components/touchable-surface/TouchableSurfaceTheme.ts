/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Function1 } from '../../utils-ts/Function1';
import { ComplexComponentTheme } from '../ComplexComponentTheme';
import { BuiltInTouchableTheme } from '../touchable/TouchableTheme';
import { BuiltInViewTheme } from '../view/ViewTheme';
import {
  TouchableSurfaceProps,
  TouchableSurfacePropsOptional,
} from './TouchableSurfaceProps';

export interface TouchableSurfaceTheme extends ComplexComponentTheme {
  readonly container?: BuiltInViewTheme<TouchableSurfaceProps>;
  readonly getProps?: Function1<
    TouchableSurfaceProps,
    TouchableSurfacePropsOptional
  >;
  readonly touchable?: BuiltInTouchableTheme<TouchableSurfaceProps>;
}
