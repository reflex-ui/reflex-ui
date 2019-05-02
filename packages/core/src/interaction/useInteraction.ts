/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useState } from 'react';
import { GestureResponderEvent } from 'react-native';

import { isWeb } from '../utils';
import { InteractionEvent } from './InteractionEvent';
import { InteractionProps, InteractionPropsOptional } from './InteractionProps';
import { InteractionState } from './InteractionState';
import { InteractionType } from './InteractionType';

export const useInteraction = <Props extends InteractionPropsOptional>(
  props: Props,
): InteractionProps => {
  if (props.activated && props.disabled) {
    throw new Error(
      [
        'ReflexUI.useInteraction(): activated and disabled props',
        ' cannot be both true.',
      ].join(''),
    );
  }

  const getInteractionState = (): InteractionState => {
    if (props.activated) {
      return {
        event: interactionEvent,
        type: InteractionType.Activated,
      };
    }
    if (props.disabled) {
      return {
        event: interactionEvent,
        type: InteractionType.Disabled,
      };
    }
    if (isPressing) {
      return {
        event: interactionEvent,
        type: InteractionType.Pressed,
      };
    }
    if (isFocusing) {
      return {
        event: interactionEvent,
        type: InteractionType.Focused,
      };
    }
    if (isHovering) {
      return {
        event: interactionEvent,
        type: InteractionType.Hovered,
      };
    }
    return {
      event: interactionEvent,
      type: InteractionType.Enabled,
    };
  };

  const onBlur = (event: React.FocusEvent): void => {
    if (props.disabled || !isFocusing) return;

    if (!props.activated) {
      setInteractionEvent(undefined);
      setIsFocusing(false);
    }
    if (props.onBlur) props.onBlur(event);
  };

  const onFocus = (event: React.FocusEvent): void => {
    if (props.disabled || isFocusing || isPressing) {
      return;
    }

    if (!props.activated) {
      setInteractionEvent(event);
      setIsFocusing(true);
    }
    if (props.onFocus) props.onFocus(event);
  };

  const onMouseEnter = (event: React.MouseEvent): void => {
    if (!pointerHovers) setPointerHovers(true);
    if (props.disabled || isHovering) {
      return;
    }

    if (!props.activated) {
      setInteractionEvent(event);
      setIsHovering(true);
    }
    if (props.onMouseEnter) props.onMouseEnter(event);
  };

  const onMouseLeave = (event: React.MouseEvent): void => {
    if (props.disabled || !isHovering) {
      return;
    }

    if (!props.activated) {
      setInteractionEvent(undefined);
      setIsHovering(false);
    }
    if (props.onMouseLeave) props.onMouseLeave(event);
  };

  const onPressIn = (event: GestureResponderEvent): void => {
    if (props.disabled || isPressing) {
      return;
    }

    if (!props.activated) {
      setInteractionEvent(event);
      setIsPressing(true);
    }
    if (props.onPressIn) props.onPressIn(event);
  };

  const onPressOut = (event: GestureResponderEvent): void => {
    if (props.disabled || !isPressing) {
      return;
    }

    if (!props.activated) {
      setInteractionEvent(event);
      setIsPressing(false);
    }
    if (props.onPressOut) props.onPressOut(event);
  };

  const [interactionEvent, setInteractionEvent] = useState<
    InteractionEvent | undefined
  >(undefined);
  const [isFocusing, setIsFocusing] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isPressing, setIsPressing] = useState(false);
  const [pointerHovers, setPointerHovers] = useState(false);

  const interactionState = getInteractionState();
  const disabled = interactionState.type === InteractionType.Disabled;

  return {
    disabled,
    interactionState,
    ...((isWeb && { onBlur }) || {}),
    ...((isWeb && { onFocus }) || {}),
    ...((isWeb && { onMouseEnter }) || {}),
    ...((isWeb && { onMouseLeave }) || {}),
    onPressIn,
    onPressOut,
    pointerHovers,
  };
};
