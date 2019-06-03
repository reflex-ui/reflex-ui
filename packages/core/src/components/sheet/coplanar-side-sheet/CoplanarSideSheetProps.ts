/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { SheetPropsBase } from '../SheetPropsBase';
import { CoplanarSideSheetTheme } from './CoplanarSideSheetTheme';
import { CoplanarSideSheetVariant } from './CoplanarSideSheetVariant';

export interface CoplanarSideSheetProps
  extends SheetPropsBase<CoplanarSideSheetProps, CoplanarSideSheetTheme> {
  readonly variant: CoplanarSideSheetVariant;
}

export type CoplanarSideSheetPropsOptional = Partial<CoplanarSideSheetProps>;
