import * as React from 'react';
import { GestureResponderEvent } from 'react-native';
import { InteractivityState } from './InteractivityState';

export interface InteractiveComponent {
  disabled?: boolean;
  onMouseEnter?: React.MouseEventHandler;
  onMouseLeave?: React.MouseEventHandler;
  onPressIn?: (event: GestureResponderEvent) => void;
  onPressOut?: (event: GestureResponderEvent) => void;
  interactivityState?: InteractivityState;
}
