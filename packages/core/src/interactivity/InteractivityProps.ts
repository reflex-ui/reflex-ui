/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { TouchableWithoutFeedbackProps } from 'react-native';
import {
  InteractivityStateProps,
  OptionalInteractivityStateProps,
} from './InteractivityStateProps';

export interface InteractivityProps
  extends InteractivityStateProps,
    TouchableWithoutFeedbackProps {}

export interface OptionalInteractivityProps
  extends OptionalInteractivityStateProps,
    TouchableWithoutFeedbackProps {}
