/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ComponentThemeGetter } from '../ComponentThemeGetter';
import { RfxSvgTheme } from '../svg/RfxSvgTheme';
import { BuiltInTextTheme } from '../text/TextTheme';
import { BuiltInTouchableTheme } from '../touchable/TouchableTheme';
import { BuiltInViewTheme } from '../view/ViewTheme';
import { ButtonProps } from './ButtonProps';

export interface ButtonTheme {
  readonly container?: BuiltInViewTheme<ButtonProps>;
  readonly getIcon?: ComponentThemeGetter<ButtonProps, RfxSvgTheme>;
  readonly getLeadingIcon?: ComponentThemeGetter<ButtonProps, RfxSvgTheme>;
  readonly text?: BuiltInTextTheme<ButtonProps>;
  readonly touchable?: BuiltInTouchableTheme<ButtonProps>;
  readonly getTrailingIcon?: ComponentThemeGetter<ButtonProps, RfxSvgTheme>;
}
