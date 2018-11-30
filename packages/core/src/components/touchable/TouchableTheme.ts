/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { TouchableWithoutFeedbackProps } from 'react-native';
import { TouchablePropsGetter } from './TouchablePropsGetter';

export interface TouchableTheme<P> {
  readonly getProps: TouchablePropsGetter<P>;
  readonly props: TouchableWithoutFeedbackProps;
}

export type OptionalTouchableTheme<P> = Partial<TouchableTheme<P>>;
