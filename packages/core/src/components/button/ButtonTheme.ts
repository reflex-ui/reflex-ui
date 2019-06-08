/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ComponentTheme } from '../ComponentTheme';
import { ComponentThemeGetter } from '../ComponentThemeGetter';
import { SurfaceTheme } from '../surface/SurfaceTheme';
import { RfxSvgTheme } from '../svg/RfxSvgTheme';
import { TextTheme } from '../text/TextTheme';
// tslint:disable-next-line:max-line-length
import { TouchableWithoutFeedbackTheme } from '../touchable/TouchableWithoutFeedbackTheme';
import { ViewTheme } from '../view/ViewTheme';
import { ButtonProps, ButtonPropsOptional } from './ButtonProps';

export interface ButtonTheme
  extends ComponentTheme<ButtonProps, ButtonPropsOptional> {
  readonly icon?: ComponentThemeGetter<ButtonProps, RfxSvgTheme>;
  readonly iconContainer?: ViewTheme<ButtonProps>;
  readonly leadingIcon?: ComponentThemeGetter<ButtonProps, RfxSvgTheme>;
  readonly leadingIconContainer?: ViewTheme<ButtonProps>;
  readonly surface?: ComponentThemeGetter<ButtonProps, SurfaceTheme>;
  readonly text?: TextTheme<ButtonProps>;
  readonly touchable?: TouchableWithoutFeedbackTheme<ButtonProps>;
  readonly trailingIcon?: ComponentThemeGetter<ButtonProps, RfxSvgTheme>;
  readonly trailingIconContainer?: ViewTheme<ButtonProps>;
}
