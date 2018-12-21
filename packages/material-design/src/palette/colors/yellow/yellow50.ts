/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { black } from '../black';
import { MaterialPaletteColor } from '../MaterialPaletteColor';
import { white } from '../white';

export const yellow50: MaterialPaletteColor = {
  color: {
    dark: {
      color: '#cccab5',
      onColor: black,
    },
    light: {
      color: white,
      onColor: black,
    },
    normal: {
      color: '#fffde7',
      onColor: black,
    },
  },
  name: 'Yellow',
  tone: '50',
};
