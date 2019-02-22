/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { StyleObj } from './StyleObj';

export const registerStyle = <Style extends ViewStyle | TextStyle | ImageStyle>(
  style: Style,
): Style => StyleSheet.create<StyleObj<Style>>({ style }).style;
/*
export const registerStyle = <Style>(style: Style): RegisteredStyle<Style> =>
  StyleSheet.create<StyleObj<Style>>({ style }).style;
*/
