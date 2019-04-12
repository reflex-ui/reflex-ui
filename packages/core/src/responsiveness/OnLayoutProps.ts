/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LayoutChangeEvent, LayoutRectangle } from 'react-native';

export interface OnLayoutProps {
  readonly enableOnLayout?: boolean;
  readonly layoutRectangle?: LayoutRectangle;
  /*
   * We cannot use 'readonly' here because it causes
   * a TypeScript error, since other react-native interfaces
   * (e.g. TouchableWithoutFeedbackProps) also declares onLayout,
   * but without 'readonly', so if we want to extend such an interface
   * AND this one we get an error if this one has 'readonly'.
   * Example error:
   * [ts] Interface 'SomeComponentProps' cannot simultaneously
   * extend types 'InteractionProps' and 'OnLayoutProps'.
   * Named property 'onLayout' of types 'InteractionProps' and
   * 'OnLayoutProps' are not identical. [2320]
   */
  onLayout?: (event: LayoutChangeEvent) => void;
  /**/
}
