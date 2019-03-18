/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { TouchableWithoutFeedbackProps, ViewStyle } from 'react-native';
import {
  BuiltInSimpleComponentTheme,
  SimpleComponentTheme,
} from '../SimpleComponentTheme';

export type TouchableChildTheme<ComponentProps> = SimpleComponentTheme<
  ComponentProps,
  TouchableWithoutFeedbackProps,
  ViewStyle
>;

export type BuiltInTouchableTheme<ComponentProps> = BuiltInSimpleComponentTheme<
  ComponentProps,
  TouchableWithoutFeedbackProps,
  ViewStyle
>;
