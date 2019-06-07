/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { TouchableWithoutFeedbackProps, ViewStyle } from 'react-native';
import { PrimitiveComponentTheme } from '../PrimitiveComponentTheme';

export type TouchableWithoutFeedbackTheme<
  ComponentProps
> = PrimitiveComponentTheme<
  ComponentProps,
  TouchableWithoutFeedbackProps,
  ViewStyle
>;
