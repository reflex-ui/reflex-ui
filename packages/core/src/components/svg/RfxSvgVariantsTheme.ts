/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { RfxSvgTheme, RfxSvgThemeOptional } from './RfxSvgTheme';

export interface RfxSvgVariantsTheme {
  readonly rfxSvg: RfxSvgTheme;
  readonly svgIcon: RfxSvgTheme;
}

export type RfxSvgVariantsThemeOptional = {
  [P in keyof RfxSvgVariantsTheme]?: RfxSvgThemeOptional
};
