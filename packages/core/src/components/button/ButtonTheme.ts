/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ComponentThemeGetter } from '../ComponentThemeGetter';
import { SurfaceTheme } from '../surface/SurfaceTheme';
import { RfxSvgTheme } from '../svg/RfxSvgTheme';
import { BuiltInTextTheme } from '../text/TextTheme';
// tslint:disable-next-line:max-line-length
import { BuiltInTouchableWithoutFeedbackTheme } from '../touchable/TouchableWithoutFeedbackTheme';
import { BuiltInViewTheme } from '../view/ViewTheme';
import { ButtonProps } from './ButtonProps';

export interface ButtonTheme {
  readonly icon?: ComponentThemeGetter<ButtonProps, RfxSvgTheme>;
  readonly iconContainer?: BuiltInViewTheme<ButtonProps>;
  readonly leadingIcon?: ComponentThemeGetter<ButtonProps, RfxSvgTheme>;
  readonly leadingIconContainer?: BuiltInViewTheme<ButtonProps>;
  readonly surface?: ComponentThemeGetter<ButtonProps, SurfaceTheme>;
  readonly text?: BuiltInTextTheme<ButtonProps>;
  readonly touchable?: BuiltInTouchableWithoutFeedbackTheme<ButtonProps>;
  readonly trailingIcon?: ComponentThemeGetter<ButtonProps, RfxSvgTheme>;
  readonly trailingIconContainer?: BuiltInViewTheme<ButtonProps>;
}
