/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  LayeredColor,
  LayeredColorFactory,
  LayeredColorFactoryInput,
} from '@reflex-ui/core';

// tslint:disable-next-line:max-line-length
import { getContainedColorByInteraction } from './getContainedColorByInteraction';

export const createContainedLayeredColor: LayeredColorFactory = (
  config: LayeredColorFactoryInput,
): LayeredColor => ({
  color: getContainedColorByInteraction({
    color: config.color.color,
    type: config.interactionType,
  }),
  onColor: config.color.onColor,
});
