/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { TextProps, ViewProps } from 'react-native';
import { SvgProps } from 'react-native-svg';

export interface ButtonSubProps {
  readonly container?: ViewProps;
  readonly icon?: SvgProps;
  readonly iconContainer?: ViewProps;
  readonly leadingIcon?: SvgProps;
  readonly leadingIconContainer?: ViewProps;
  readonly text?: TextProps;
  readonly trailingIcon?: SvgProps;
  readonly trailingIconContainer?: ViewProps;
}
