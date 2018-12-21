/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { black } from '../black';
import { MaterialPaletteColor } from '../MaterialPaletteColor';
import { white } from '../white';

export const teal800: MaterialPaletteColor = {
  color: {
    dark: {
      color: '#003d33',
      onColor: white,
    },
    light: {
      color: '#439889',
      onColor: black,
    },
    normal: {
      color: '#00695c',
      onColor: white,
    },
  },
  name: 'Teal',
  tone: '800',
};
