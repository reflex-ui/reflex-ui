/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ColorGamut, ColorGamutOptional } from './ColorGamut';

export interface FlexColor {
  readonly activated: ColorGamut;
  readonly disabled: ColorGamut;
  readonly enabled: ColorGamut;
  readonly focused: ColorGamut;
  readonly hovered: ColorGamut;
  readonly pressed: ColorGamut;
}

export interface FlexColorOptional {
  readonly activated?: ColorGamutOptional;
  readonly disabled: ColorGamut;
  readonly enabled: ColorGamut;
  readonly focused?: ColorGamutOptional;
  readonly hovered?: ColorGamutOptional;
  readonly pressed?: ColorGamutOptional;
}
