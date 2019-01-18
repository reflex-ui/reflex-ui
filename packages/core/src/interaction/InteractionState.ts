/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { InteractionEvent } from './InteractionEvent';
import { InteractionType } from './InteractionType';

export interface InteractionState {
  readonly event?: InteractionEvent;
  readonly type: InteractionType;
}
