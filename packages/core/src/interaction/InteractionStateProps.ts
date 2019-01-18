/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { InteractionState } from './InteractionState';

export interface InteractionStateProps {
  readonly interactionState: InteractionState;
}

export type OptionalInteractionStateProps = Partial<InteractionStateProps>;
