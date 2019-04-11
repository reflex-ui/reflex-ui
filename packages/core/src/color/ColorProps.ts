/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PaletteColor } from './PaletteColor';

export interface ColorProps {
  readonly contained?: boolean;
  readonly paletteColor: PaletteColor;
  readonly invertColor?: boolean;
}

export type ColorPropsOptional = Partial<ColorProps>;
