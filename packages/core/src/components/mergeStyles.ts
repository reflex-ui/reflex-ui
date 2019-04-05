/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import isEmpty from 'lodash/isEmpty';
import { ImageStyle, StyleProp, TextStyle, ViewStyle } from 'react-native';

import { registerStyle } from './registerStyle';

export const pushStyle = <
  PrimitiveStyle extends ViewStyle | TextStyle | ImageStyle
>(
  styles: StyleProp<PrimitiveStyle>[],
  style: StyleProp<PrimitiveStyle>,
): StyleProp<PrimitiveStyle>[] => {
  let newStyles = styles.concat([]);
  if (Array.isArray(style) && style.length) {
    newStyles = newStyles.concat(style);
  } else if (typeof style === 'number') {
    newStyles.push(style);
  } else if (typeof style === 'object' && !isEmpty(style)) {
    newStyles.push(registerStyle(style as PrimitiveStyle));
  } else {
    throw new Error(
      [
        'Rfx.pushStyleIntoArray() - Invalid style object. Expected',
        'a plain object, a number (registered style), or an array of numbers',
        `(registered styles), but received: ${typeof style}`,
      ].join(' '),
    );
  }

  return newStyles;
};

export const mergeStyles = <
  PrimitiveStyle extends ViewStyle | TextStyle | ImageStyle
>(
  style1?: StyleProp<PrimitiveStyle>,
  style2?: StyleProp<PrimitiveStyle>,
): StyleProp<PrimitiveStyle> | undefined => {
  if (style1 === undefined || style1 === null) return style2;
  if (style2 === undefined || style2 === null) return style1;

  let styles: StyleProp<PrimitiveStyle>[] = [];
  styles = pushStyle(styles, style1);
  styles = pushStyle(styles, style2);

  return styles;
};
