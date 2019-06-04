/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ModalPropsBase } from '../../modal/ModalProps';
import { SheetPropsBase } from '../SheetPropsBase';
import { ModalSideSheetTheme } from './ModalSideSheetTheme';
import { ModalSideSheetVariant } from './ModalSideSheetVariant';

export interface ModalSideSheetProps
  extends SheetPropsBase<ModalSideSheetProps, ModalSideSheetTheme>,
    ModalPropsBase {
  readonly variant: ModalSideSheetVariant;
}

export type ModalSideSheetPropsOptional = Partial<ModalSideSheetProps>;
