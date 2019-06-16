/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { SheetPropsBase } from '../SheetPropsBase';
import { CoplanarSheetTheme } from './CoplanarSheetTheme';
import { CoplanarSheetVariant } from './CoplanarSheetVariant';

export interface CoplanarSheetProps
  extends SheetPropsBase<CoplanarSheetProps, CoplanarSheetTheme> {
  readonly variant: CoplanarSheetVariant;
}

export type CoplanarSheetPropsOptional = Partial<CoplanarSheetProps>;
