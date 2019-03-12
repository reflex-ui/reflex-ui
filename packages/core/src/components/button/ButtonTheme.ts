/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  TextProps,
  TextStyle,
  TouchableWithoutFeedbackProps,
  ViewProps,
  ViewStyle,
} from 'react-native';
import { SvgProps } from 'react-native-svg';

import { InjectableSubTheme, SubTheme } from '../subcomponents';
import { ButtonProps } from './ButtonProps';

export interface ButtonTheme {
  readonly container: InjectableSubTheme<ButtonProps, ViewProps, ViewStyle>;
  readonly icon: SubTheme<ButtonProps, SvgProps, ViewStyle>;
  readonly iconContainer: InjectableSubTheme<ButtonProps, ViewProps, ViewStyle>;
  readonly leadingIcon: SubTheme<ButtonProps, SvgProps, ViewStyle>;
  readonly leadingIconContainer: InjectableSubTheme<
    ButtonProps,
    ViewProps,
    ViewStyle
  >;
  readonly text: InjectableSubTheme<ButtonProps, TextProps, TextStyle>;
  readonly touchable: InjectableSubTheme<
    ButtonProps,
    TouchableWithoutFeedbackProps,
    ViewStyle
  >;
  readonly trailingIcon: SubTheme<ButtonProps, SvgProps, ViewStyle>;
  readonly trailingIconContainer: InjectableSubTheme<
    ButtonProps,
    ViewProps,
    ViewStyle
  >;
}
