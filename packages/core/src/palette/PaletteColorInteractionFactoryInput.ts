/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PaletteColorVariant } from './PaletteColorVariant';
import { PaletteColorVariantFactory } from './PaletteColorVariantFactory';

export interface PaletteColorInteractionFactoryInput {
  readonly colorVariant: PaletteColorVariant;
  readonly colorVariantFactory: PaletteColorVariantFactory;
  readonly disabledColorVariant: PaletteColorVariant;
}
