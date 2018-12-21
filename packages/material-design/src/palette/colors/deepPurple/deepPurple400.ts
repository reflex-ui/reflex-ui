/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { black } from '../black';
import { MaterialPaletteColor } from '../MaterialPaletteColor';
import { white } from '../white';

export const deepPurple400: MaterialPaletteColor = {
  color: {
    dark: {
      color: '#4d2c91',
      onColor: white,
    },
    light: {
      color: '#b085f5',
      onColor: black,
    },
    normal: {
      color: '#7e57c2',
      onColor: white,
    },
  },
  name: 'Deep Purple',
  tone: '400',
};
