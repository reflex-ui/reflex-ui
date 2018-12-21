/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { black } from '../black';
import { MaterialPaletteColor } from '../MaterialPaletteColor';

export const yellow600: MaterialPaletteColor = {
  color: {
    dark: {
      color: '#c6a700',
      onColor: black,
    },
    light: {
      color: '#ffff6b',
      onColor: black,
    },
    normal: {
      color: '#fdd835',
      onColor: black,
    },
  },
  name: 'Yellow',
  tone: '600',
};
