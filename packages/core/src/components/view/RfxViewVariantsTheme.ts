/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { RfxViewTheme, RfxViewThemeOptional } from './RfxViewTheme';

export interface RfxViewVariantsTheme {
  readonly column: RfxViewTheme;
  readonly row: RfxViewTheme;
}

export type RfxViewVariantsThemeOptional = {
  [P in keyof RfxViewVariantsTheme]?: RfxViewThemeOptional
};
