/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { StyleProp, StyleSheet, TextStyle } from 'react-native';
import { isAndroid } from '../../utils';
import { transformText } from './transformText';

export const handleAndroidTextTransformation = (
  text: string | undefined | null,
  style: StyleProp<TextStyle> | undefined | null,
): string | undefined | null => {
  if (!isAndroid || !text || !style) return text;

  return transformText({
    text,
    transformation: StyleSheet.flatten(style).textTransform,
  });
};
