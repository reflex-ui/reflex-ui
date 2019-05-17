/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { InteractionStateProps } from './InteractionStateProps';

export interface InteractionProps extends InteractionStateProps {
  readonly activated?: boolean;

  /*
   * We cannot use 'readonly' here because it causes
   * a TypeScript error, since other react-native interfaces
   * (e.g. TouchableWithoutFeedbackProps) also declares disabled,
   * but without 'readonly', so if we want to extend such an interface
   * AND this one we get an error if this one has 'readonly'.
   * Example error:
   * [ts] Interface 'TouchablePropsBase<Props, Theme>'
   * cannot simultaneously extend types 'InteractionProps'
   * and 'TouchableWithoutFeedbackProps'.
   * Named property 'disabled' of types 'InteractionProps'
   * and 'TouchableWithoutFeedbackProps' are not identical. (2320)
   */
  disabled?: boolean;
  /**/
  readonly isTouchableHandler?: boolean;
  readonly pointerHovers?: boolean;
}

export type InteractionPropsOptional = Partial<InteractionProps>;
