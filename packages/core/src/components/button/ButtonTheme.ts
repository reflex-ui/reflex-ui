/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Function1 } from '../../utils-ts/Function1';
import { ComplexComponentTheme } from '../ComplexComponentTheme';
import { RfxSvgTheme } from '../svg/RfxSvgTheme';
import { BuiltInTextTheme } from '../text/TextTheme';
import { BuiltInTouchableTheme } from '../touchable/TouchableTheme';
import { BuiltInViewTheme } from '../view/ViewTheme';
import { ButtonProps, ButtonPropsOptional } from './ButtonProps';

export interface ButtonTheme extends ComplexComponentTheme {
  readonly container?: BuiltInViewTheme<ButtonProps>;
  readonly getIcon?: Function1<ButtonProps, RfxSvgTheme>;
  readonly getLeadingIcon?: Function1<ButtonProps, RfxSvgTheme>;
  readonly getProps?: Function1<ButtonProps, ButtonPropsOptional>;
  readonly text?: BuiltInTextTheme<ButtonProps>;
  readonly touchable?: BuiltInTouchableTheme<ButtonProps>;
  readonly getTrailingIcon?: Function1<ButtonProps, RfxSvgTheme>;
}
