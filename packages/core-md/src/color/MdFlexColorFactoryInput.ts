/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LayeredColor, LayeredColorFactory } from '@reflex-ui/core';

export interface MdFlexColorFactoryInput {
  readonly containedColor: LayeredColor;
  readonly containedColorDisabled: LayeredColor;
  readonly containedColorFactory?: LayeredColorFactory;
  readonly containedInvertedColor?: LayeredColor;
  readonly containedInvertedColorDisabled: LayeredColor;
  readonly uncontainedColor?: LayeredColor;
  readonly uncontainedColorDisabled: LayeredColor;
  readonly uncontainedColorFactory?: LayeredColorFactory;
  readonly uncontainedInvertedColor?: LayeredColor;
  readonly uncontainedInvertedColorDisabled: LayeredColor;
}
