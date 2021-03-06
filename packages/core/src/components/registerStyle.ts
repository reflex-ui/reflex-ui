/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ImageStyle,
  StyleProp,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { StyleObj } from './StyleObj';

export const registerStyle = <Style extends ViewStyle | TextStyle | ImageStyle>(
  style: Style,
): StyleProp<Style> => StyleSheet.create<StyleObj<Style>>({ style }).style;
