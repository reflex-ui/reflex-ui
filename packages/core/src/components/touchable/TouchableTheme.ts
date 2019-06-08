/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { TouchableProps } from './TouchableProps';
import { TouchableWithoutFeedbackTheme } from './TouchableWithoutFeedbackTheme';

export interface TouchableTheme {
  readonly touchable?: TouchableWithoutFeedbackTheme<TouchableProps>;
}
