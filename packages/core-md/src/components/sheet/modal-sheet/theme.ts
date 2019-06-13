/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ModalSheetVariantsTheme } from '@reflex-ui/core';

import { modalSheetEndTheme, modalSheetStartTheme } from './sideSheetTheme';
import {
  modalSheetBottomTheme,
  modalSheetTopTheme,
} from './topBottomSheetTheme';

export const modalSheetVariantsTheme: ModalSheetVariantsTheme = {
  bottom: modalSheetBottomTheme,
  end: modalSheetEndTheme,
  start: modalSheetStartTheme,
  top: modalSheetTopTheme,
};
