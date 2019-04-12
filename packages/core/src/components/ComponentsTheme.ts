/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { AppBarVariantsTheme } from './app-bar';
import { ButtonVariantsTheme } from './button';
import { SurfaceTheme } from './surface';
import { RfxSvgVariantsTheme } from './svg';
import { RfxTextVariantsTheme } from './text';
import { TouchableSurfaceTheme } from './touchable-surface';
import { RfxViewTheme, RfxViewVariantsTheme } from './view';

export interface ComponentsTheme {
  readonly appBar?: AppBarVariantsTheme;
  readonly button?: ButtonVariantsTheme;
  readonly list?: SurfaceTheme;
  readonly listItem?: RfxViewTheme;
  readonly surface?: SurfaceTheme;
  readonly svg?: RfxSvgVariantsTheme;
  readonly text?: RfxTextVariantsTheme;
  readonly touchableSurface?: TouchableSurfaceTheme;
  readonly views?: RfxViewVariantsTheme;
}
