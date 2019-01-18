/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { InteractionType } from '../interaction/InteractionType';
import { PaletteColorVariant } from './PaletteColorVariant';

export interface PaletteColorVariantFactoryConfig {
  readonly color: PaletteColorVariant;
  readonly interactionType: InteractionType;
}
