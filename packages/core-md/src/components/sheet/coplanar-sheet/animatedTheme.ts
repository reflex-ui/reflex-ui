/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { CoplanarSheetVariantsTheme } from '@reflex-ui/core';

import {
  animatedCoplanarEndSheetTheme,
  animatedCoplanarStartSheetTheme,
} from './animatedSideSheetTheme';

export const animatedCoplanarSheetVariantsTheme: CoplanarSheetVariantsTheme = {
  end: animatedCoplanarEndSheetTheme,
  start: animatedCoplanarStartSheetTheme,
};
