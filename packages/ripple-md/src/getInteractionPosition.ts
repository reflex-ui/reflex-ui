/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { InteractionEvent } from '@reflex-ui/core';
import { GestureResponderEvent } from 'react-native';

import { ElementMeasure } from './ElementMeasure';
import { Position2D } from './Position2D';

export const getInteractionPosition = (
  elementMeasure: ElementMeasure,
  interactionEvent?: InteractionEvent,
): Position2D => {
  let x = 0;
  let y = 0;

  if (
    interactionEvent &&
    (interactionEvent as GestureResponderEvent).nativeEvent
  ) {
    x =
      (interactionEvent as GestureResponderEvent).nativeEvent.pageX -
      elementMeasure.pageX;
    y =
      (interactionEvent as GestureResponderEvent).nativeEvent.pageY -
      elementMeasure.pageY;
  }

  return { x, y };
};
