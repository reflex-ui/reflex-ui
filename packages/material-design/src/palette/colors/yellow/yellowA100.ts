/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { black } from '../black';
import { MaterialPaletteColor } from '../MaterialPaletteColor';

export const yellowA100: MaterialPaletteColor = {
  color: {
    dark: {
      color: '#cacc5d',
      onColor: black,
    },
    light: {
      color: '#ffffbf',
      onColor: black,
    },
    normal: {
      color: '#ffff8d',
      onColor: black,
    },
  },
  name: 'Yellow',
  tone: 'A100',
};
