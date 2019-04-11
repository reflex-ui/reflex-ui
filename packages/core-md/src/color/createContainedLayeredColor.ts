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

import { getInlayColorByInteraction } from './getInlayColorByInteraction';

export const createContainedLayeredColor: LayeredColorFactory = (
  config: LayeredColorFactoryInput,
): LayeredColor => ({
  color: getInlayColorByInteraction({
    color: config.color.color,
    type: config.interactionType,
  }),
  onColor: config.color.onColor,
});
