/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ImageStyle, StyleProp, TextStyle, ViewStyle } from 'react-native';

export const isValidStyle = <
  PrimitiveStyle extends ViewStyle | TextStyle | ImageStyle
>(
  style: StyleProp<PrimitiveStyle>,
): boolean => {
  if (style === null || style === undefined) return false;

  if (
    Array.isArray(style) ||
    typeof style === 'number' ||
    typeof style === 'object'
  ) {
    return true;
  }

  return false;
};
