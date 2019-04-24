/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { TouchableWithoutFeedbackProps } from 'react-native';
import {
  InteractionStateProps,
  InteractionStatePropsOptional,
} from './InteractionStateProps';

export interface InteractionProps
  extends InteractionStateProps,
    TouchableWithoutFeedbackProps {
  readonly activated?: boolean;
  readonly pointerHovers?: boolean;
}

export interface InteractionPropsOptional
  extends InteractionStatePropsOptional,
    TouchableWithoutFeedbackProps {
  readonly activated?: boolean;
  readonly pointerHovers?: boolean;
}
