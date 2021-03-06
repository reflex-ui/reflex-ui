/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ModalSheetVariantsTheme } from '@reflex-ui/core';

import { animatedModalDialogSheetTheme } from './animatedDialogSheetTheme';
// tslint:disable-next-line:max-line-length
import { animatedModalFullscreenDialogSheetTheme } from './animatedFullscreenDialogSheetTheme';
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
  dialog: animatedModalDialogSheetTheme,
  end: animatedModalEndSheetTheme,
  fullScreenDialog: animatedModalFullscreenDialogSheetTheme,
  start: animatedModalStartSheetTheme,
  top: animatedModalTopSheetTheme,
};
