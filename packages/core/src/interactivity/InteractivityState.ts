/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { InteractivityEvent } from './InteractivityEvent';
import { InteractivityType } from './InteractivityType';

export interface InteractivityState {
  readonly event?: InteractivityEvent;
  readonly type: InteractivityType;
}
