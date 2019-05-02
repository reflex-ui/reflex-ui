/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { InteractionEvent } from '@reflex-ui/core';
import { GestureResponderEvent } from 'react-native';
import { Position2D } from './Position2D';

export const getInteractionPosition = (
  interactionEvent?: InteractionEvent,
): Position2D => {
  let x = 0;
  let y = 0;

  if (interactionEvent) {
    x = (interactionEvent as GestureResponderEvent).nativeEvent.locationX;
    y = (interactionEvent as GestureResponderEvent).nativeEvent.locationY;
  }

  return { x, y };
};
