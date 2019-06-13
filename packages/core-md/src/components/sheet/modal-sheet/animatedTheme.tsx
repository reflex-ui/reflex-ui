/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ModalSheetVariantsTheme } from '@reflex-ui/core';

import {
  animatedModalSheetEndTheme,
  animatedModalSheetStartTheme,
} from './animatedSideSheetTheme';
import {
  animatedModalSheetBottomTheme,
  animatedModalSheetTopTheme,
} from './animatedTopBottomSheetTheme';

export const animatedModalSheetVariantsTheme: ModalSheetVariantsTheme = {
  bottom: animatedModalSheetBottomTheme,
  end: animatedModalSheetEndTheme,
  start: animatedModalSheetStartTheme,
  top: animatedModalSheetTopTheme,
};
