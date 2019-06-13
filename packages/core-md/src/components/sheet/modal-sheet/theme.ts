/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ModalSheetVariantsTheme } from '@reflex-ui/core';

import { modalEndSheetTheme, modalStartSheetTheme } from './sideSheetTheme';
import {
  modalBottomSheetTheme,
  modalTopSheetTheme,
} from './topBottomSheetTheme';

export const modalSheetVariantsTheme: ModalSheetVariantsTheme = {
  bottom: modalBottomSheetTheme,
  end: modalEndSheetTheme,
  start: modalStartSheetTheme,
  top: modalTopSheetTheme,
};
