/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { CoplanarSheetTheme } from './CoplanarSheetTheme';

export interface CoplanarSheetVariantsTheme {
  readonly bottom: CoplanarSheetTheme;
  readonly end: CoplanarSheetTheme;
  readonly start: CoplanarSheetTheme;
  readonly top: CoplanarSheetTheme;
}
