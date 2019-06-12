/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ModalPropsBase } from '../../modal/ModalProps';
import { SheetPropsBase } from '../SheetPropsBase';
import { ModalSheetTheme } from './ModalSheetTheme';
import { ModalSheetVariant } from './ModalSheetVariant';

export interface ModalSheetProps
  extends SheetPropsBase<ModalSheetProps, ModalSheetTheme>,
    ModalPropsBase {
  readonly variant: ModalSheetVariant;
}

export type ModalSheetPropsOptional = Partial<ModalSheetProps>;
