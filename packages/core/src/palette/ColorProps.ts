/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PaletteColorArrangement } from './PaletteColorArrangement';

export interface ColorProps {
  readonly colorArrangement: PaletteColorArrangement;
  readonly contained?: boolean;
  readonly invertColor?: boolean;
}

export type ColorPropsOptional = Partial<ColorProps>;
