/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { RegisteredStyle, StyleSheet } from 'react-native';
import { PrimitiveStyleObj } from './PrimitiveStyleObj';

export const registerStyle = <PrimitiveStyle extends {}>(
  style: PrimitiveStyle,
): RegisteredStyle<PrimitiveStyle> =>
  StyleSheet.create<PrimitiveStyleObj<PrimitiveStyle>>({ style }).style;
