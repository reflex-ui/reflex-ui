/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { TextProps, ViewProps } from 'react-native';

export interface ButtonSubProps {
  readonly container?: ViewProps;
  readonly icon?: TextProps;
  readonly iconContainer?: ViewProps;
  readonly leadingIcon?: TextProps;
  readonly leadingIconContainer?: ViewProps;
  readonly text?: TextProps;
  readonly trailingIcon?: TextProps;
  readonly trailingIconContainer?: ViewProps;
}
