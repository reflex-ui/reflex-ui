/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useState } from 'react';
import {
  GestureResponderEvent,
  TouchableWithoutFeedbackProps,
} from 'react-native';

import { isWeb } from '../utils';
import { InteractionProps, InteractionPropsOptional } from './InteractionProps';
import { InteractionState } from './InteractionState';
import { InteractionType } from './InteractionType';

export const useInteraction = <
  Props extends InteractionPropsOptional & TouchableWithoutFeedbackProps
>(
  props: Props,
): InteractionProps & TouchableWithoutFeedbackProps => {
  if (props.activated && props.disabled) {
    throw new Error(
      [
        'ReflexUI.useInteraction(): activated and disabled props',
        ' cannot be both true.',
      ].join(''),
    );
  }

  const onBlur = (event: React.FocusEvent): void => {
    if (interactionState.type === InteractionType.Disabled) return;

    if (
      interactionState.type !== InteractionType.Activated &&
      interactionState.type !== InteractionType.Enabled
    ) {
      setInteractionState({
        event,
        type: InteractionType.Enabled,
      });
    }

    if (props.onBlur) props.onBlur(event);
  };

  const onFocus = (event: React.FocusEvent): void => {
    if (
      interactionState.type === InteractionType.Disabled ||
      interactionState.type === InteractionType.Pressed
    ) {
      return;
    }

    if (interactionState.type !== InteractionType.Activated) {
      setInteractionState({
        event,
        type: InteractionType.Focused,
      });
    }

    if (props.onFocus) props.onFocus(event);
  };

  const onMouseEnter = (event: React.MouseEvent): void => {
    if (!pointerHovers) setPointerHovers(true);
    if (interactionState.type === InteractionType.Disabled) return;

    if (interactionState.type !== InteractionType.Activated) {
      setIsHovering(true);
      setInteractionState({
        event,
        type: InteractionType.Hovered,
      });
    }

    if (props.onMouseEnter) props.onMouseEnter(event);
  };

  const onMouseLeave = (event: React.MouseEvent): void => {
    if (interactionState.type === InteractionType.Disabled) {
      return;
    }

    setIsHovering(false);
    if (interactionState.type === InteractionType.Hovered) {
      setInteractionState({
        event,
        type: InteractionType.Enabled,
      });
    }

    if (props.onMouseLeave) props.onMouseLeave(event);
  };

  const onPressIn = (event: GestureResponderEvent): void => {
    if (interactionState.type === InteractionType.Disabled) return;

    if (interactionState.type !== InteractionType.Activated) {
      setInteractionState({
        event,
        type: InteractionType.Pressed,
      });
    }

    if (props.onPressIn) props.onPressIn(event);
  };

  const onPressOut = (event: GestureResponderEvent): void => {
    if (interactionState.type === InteractionType.Disabled) return;

    if (interactionState.type !== InteractionType.Activated) {
      setInteractionState({
        event,
        type: isHovering ? InteractionType.Hovered : InteractionType.Enabled,
      });
    }

    if (props.onPressOut) props.onPressOut(event);
  };

  const [interactionState, setInteractionState] = useState<InteractionState>(
    () => {
      if (props.interactionState) return props.interactionState;
      return { type: InteractionType.Enabled };
    },
  );

  if (props.disabled && interactionState.type !== InteractionType.Disabled) {
    setInteractionState({ type: InteractionType.Disabled });
  } else if (
    props.activated &&
    interactionState.type !== InteractionType.Activated
  ) {
    setInteractionState({ type: InteractionType.Activated });
  } else if (
    !props.disabled &&
    interactionState.type === InteractionType.Disabled
  ) {
    setInteractionState({ type: InteractionType.Enabled });
  } else if (
    !props.activated &&
    interactionState.type === InteractionType.Activated
  ) {
    setInteractionState({ type: InteractionType.Enabled });
  }

  const [isHovering, setIsHovering] = useState(false);
  const [pointerHovers, setPointerHovers] = useState(false);

  return {
    disabled: interactionState.type === InteractionType.Disabled,
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
