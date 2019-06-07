/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import {
  GestureResponderEvent,
  NativeSyntheticEvent,
  TargetedEvent,
} from 'react-native';

export type InteractionEvent =
  | GestureResponderEvent
  | NativeSyntheticEvent<TargetedEvent>
  | React.MouseEvent;
