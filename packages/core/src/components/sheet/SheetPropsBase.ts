/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { SurfacePropsBase } from '../surface/SurfaceProps';

export interface SheetPropsBase<Props, Theme>
  extends SurfacePropsBase<Props, Theme> {}

export type SheetPropsBaseOptional<Props, Theme> = Partial<
  SheetPropsBase<Props, Theme>
>;
