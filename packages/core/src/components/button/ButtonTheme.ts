/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ComplexComponentTheme } from '../ComplexComponentTheme';
import { ComponentThemeGetter } from '../ComponentThemeGetter';
import { RfxSvgTheme } from '../svg/RfxSvgTheme';
import { BuiltInTextChildTheme } from '../text/TextChildTheme';
import { BuiltInTouchableChildTheme } from '../touchable/TouchableChildTheme';
import { BuiltInViewChildTheme } from '../view/ViewChildTheme';
import { ButtonProps } from './ButtonProps';
import { ButtonPropsOptionalGetter } from './ButtonPropsGetter';

export interface ButtonTheme extends ComplexComponentTheme {
  readonly container?: BuiltInViewChildTheme<ButtonProps>;
  readonly getIcon?: ComponentThemeGetter<ButtonProps, RfxSvgTheme>;
  readonly getLeadingIcon?: ComponentThemeGetter<ButtonProps, RfxSvgTheme>;
  readonly getProps?: ButtonPropsOptionalGetter<ButtonProps>;
  readonly text?: BuiltInTextChildTheme<ButtonProps>;
  readonly touchable?: BuiltInTouchableChildTheme<ButtonProps>;
  readonly getTrailingIcon?: ComponentThemeGetter<ButtonProps, RfxSvgTheme>;
}
