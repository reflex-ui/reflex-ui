import * as React from 'react';
import { GestureResponderEvent } from 'react-native';

export type InteractivityEvent =
  | GestureResponderEvent
  | React.FocusEvent
  | React.MouseEvent;
