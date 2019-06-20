/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { CoplanarSheetVariantsTheme } from '@reflex-ui/core';

import {
  coplanarEndSheetTheme,
  coplanarStartSheetTheme,
} from './sideSheetTheme';
import {
  coplanarBottomSheetTheme,
  coplanarTopSheetTheme,
} from './topBottomSheetTheme';

export const coplanarSheetVariantsTheme: CoplanarSheetVariantsTheme = {
  bottom: coplanarBottomSheetTheme,
  end: coplanarEndSheetTheme,
  start: coplanarStartSheetTheme,
  top: coplanarTopSheetTheme,
};
