/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { black } from '../black';
import { MaterialPaletteColor } from '../MaterialPaletteColor';
import { white } from '../white';

export const blue800: MaterialPaletteColor = {
  color: {
    dark: {
      color: '#003c8f',
      onColor: white,
    },
    light: {
      color: '#5e92f3',
      onColor: black,
    },
    normal: {
      color: '#1565c0',
      onColor: white,
    },
  },
  name: 'Blue',
  tone: '800',
};
