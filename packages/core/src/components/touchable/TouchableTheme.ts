/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ComponentTheme } from '../ComponentTheme';
import { TouchableProps, TouchablePropsOptional } from './TouchableProps';
import { TouchableWithoutFeedbackTheme } from './TouchableWithoutFeedbackTheme';

export interface TouchableTheme
  extends ComponentTheme<TouchableProps, TouchablePropsOptional> {
  readonly touchable?: TouchableWithoutFeedbackTheme<TouchableProps>;
}
