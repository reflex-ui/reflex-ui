/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { InteractionType } from '../interaction/InteractionType';
import { LayeredColor } from './LayeredColor';
import { LayeredColorFactory } from './LayeredColorFactory';

export interface ColorGamutFactoryInput {
  readonly containedColor: LayeredColor;
  readonly containedColorFactory: LayeredColorFactory;
  readonly containedInvertedColor: LayeredColor;
  readonly interactionType: InteractionType;
  readonly uncontainedColor: LayeredColor;
  readonly uncontainedColorFactory: LayeredColorFactory;
  readonly uncontainedInvertedColor: LayeredColor;
}
