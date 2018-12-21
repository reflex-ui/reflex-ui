/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { black } from '../black';
import { MaterialPaletteColor } from '../MaterialPaletteColor';
import { white } from '../white';

export const teal700: MaterialPaletteColor = {
  color: {
    dark: {
      color: '#004c40',
      onColor: white,
    },
    light: {
      color: '#48a999',
      onColor: black,
    },
    normal: {
      color: '#00796b',
      onColor: white,
    },
  },
  name: 'Teal',
  tone: '700',
};
