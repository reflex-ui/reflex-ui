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
import { BuiltInTouchableTheme } from '../touchable/TouchableTheme';
import { ButtonProps } from './ButtonProps';

export interface ButtonTheme {
  readonly getIcon?: ComponentThemeGetter<ButtonProps, RfxSvgTheme>;
  readonly getLeadingIcon?: ComponentThemeGetter<ButtonProps, RfxSvgTheme>;
  readonly surface?: ComponentThemeGetter<ButtonProps, SurfaceTheme>;
  readonly text?: BuiltInTextTheme<ButtonProps>;
  readonly touchable?: BuiltInTouchableTheme<ButtonProps>;
  readonly getTrailingIcon?: ComponentThemeGetter<ButtonProps, RfxSvgTheme>;
}
