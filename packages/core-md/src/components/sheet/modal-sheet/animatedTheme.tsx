/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ModalSheetVariantsTheme } from '@reflex-ui/core';

import {
  animatedModalEndSheetTheme,
  animatedModalStartSheetTheme,
} from './animatedSideSheetTheme';
import {
  animatedModalBottomSheetTheme,
  animatedModalTopSheetTheme,
} from './animatedTopBottomSheetTheme';

export const animatedModalSheetVariantsTheme: ModalSheetVariantsTheme = {
  bottom: animatedModalBottomSheetTheme,
  end: animatedModalEndSheetTheme,
  start: animatedModalStartSheetTheme,
  top: animatedModalTopSheetTheme,
};
