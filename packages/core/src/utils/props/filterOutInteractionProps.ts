/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { InteractionProps } from '../../interaction/InteractionProps';
import { filterOutTouchableWithoutFeedbackProps } from './';

export const filterOutInteractionProps = <Props extends InteractionProps>(
  props: Props,
): Pick<Props, Exclude<keyof Props, keyof InteractionProps>> => {
  const { activated, interactionState, ...otherProps } = props;

  // This is complex and after trying to fix it I gave up.
  // Let's see if these filterOut functions are really staying
  // around in the codebase, and if so there will be time to fix this
  // or ask for help.
  // @ts-ignore Type 'Pick<Pick<Props, Exclude<keyof Props, "activated"...
  return filterOutTouchableWithoutFeedbackProps(otherProps);
};
