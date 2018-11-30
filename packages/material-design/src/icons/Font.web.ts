/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// @ts-ignore
// tslint:disable-next-line
import iconFont from 'react-native-vector-icons/Fonts/MaterialIcons.ttf';

const iconFontStyles = `@font-face {
  src: url(${iconFont});
  font-family: MaterialIcons;
}`;

const style = document.createElement('style');
style.type = 'text/css';

style.appendChild(document.createTextNode(iconFontStyles));

document.head.appendChild(style);
