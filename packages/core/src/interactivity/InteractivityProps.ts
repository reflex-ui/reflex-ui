import * as React from 'react';
import { GestureResponderEvent } from 'react-native';
import { InteractivityState } from './InteractivityState';

export interface InteractivityProps {
  readonly disabled?: boolean;
  readonly interactivityState?: InteractivityState;
  readonly onBlur?: React.FocusEventHandler;
  readonly onFocus?: React.FocusEventHandler;
  readonly onMouseEnter?: React.MouseEventHandler;
  readonly onMouseLeave?: React.MouseEventHandler;
  readonly onPressIn?: (event: GestureResponderEvent) => void;
  readonly onPressOut?: (event: GestureResponderEvent) => void;
}
