/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PaletteColor } from './PaletteColor';
import { PaletteColorVariantFactory } from './PaletteColorVariantFactory';

export interface PaletteColorInteractionFactoryConfig {
  readonly baseColor: PaletteColor;
  readonly colorVariantFactory: PaletteColorVariantFactory;
  readonly disabledColor: PaletteColor;
}
