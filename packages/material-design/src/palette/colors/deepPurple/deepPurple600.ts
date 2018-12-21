/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { black } from '../black';
import { MaterialPaletteColor } from '../MaterialPaletteColor';
import { white } from '../white';

export const deepPurple600: MaterialPaletteColor = {
  color: {
    dark: {
      color: '#280680',
      onColor: white,
    },
    light: {
      color: '#9162e4',
      onColor: black,
    },
    normal: {
      color: '#5e35b1',
      onColor: white,
    },
  },
  name: 'Deep Purple',
  tone: '600',
};
