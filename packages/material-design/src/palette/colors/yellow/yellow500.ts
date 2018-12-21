/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { black } from '../black';
import { MaterialPaletteColor } from '../MaterialPaletteColor';

export const yellow500: MaterialPaletteColor = {
  color: {
    dark: {
      color: '#c8b900',
      onColor: black,
    },
    light: {
      color: '#ffff72',
      onColor: black,
    },
    normal: {
      color: '#ffeb3b',
      onColor: black,
    },
  },
  name: 'Yellow',
  tone: '500',
};
