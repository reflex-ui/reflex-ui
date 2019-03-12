/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { SvgChildTheme } from '../svg/SvgChildTheme';
import { BuiltInTextChildTheme } from '../text/TextChildTheme';
import { BuiltInTouchableChildTheme } from '../touchable/TouchableChildTheme';
import { BuiltInViewChildTheme } from '../view/ViewChildTheme';
import { ButtonProps } from './ButtonProps';

export interface ButtonTheme {
  readonly container: BuiltInViewChildTheme<ButtonProps>;
  readonly icon: SvgChildTheme<ButtonProps>;
  readonly iconContainer: BuiltInViewChildTheme<ButtonProps>;
  readonly leadingIcon: SvgChildTheme<ButtonProps>;
  readonly leadingIconContainer: BuiltInViewChildTheme<ButtonProps>;
  readonly text: BuiltInTextChildTheme<ButtonProps>;
  readonly touchable: BuiltInTouchableChildTheme<ButtonProps>;
  readonly trailingIcon: SvgChildTheme<ButtonProps>;
  readonly trailingIconContainer: BuiltInViewChildTheme<ButtonProps>;
}
