/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { InteractionProps } from './InteractionProps';
import { InteractionType } from './InteractionType';

export const suppressPressedState = <Props extends InteractionProps>(
  props: Props,
): Props =>
  props.interactionState.type === InteractionType.Pressed
    ? {
        ...props,
        interactionState: {
          ...props.interactionState,
          type: props.pointerHovers
            ? InteractionType.Hovered
            : InteractionType.Enabled,
        },
      }
    : props;
