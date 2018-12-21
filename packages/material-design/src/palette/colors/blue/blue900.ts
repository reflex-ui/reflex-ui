/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { black } from '../black';
import { MaterialPaletteColor } from '../MaterialPaletteColor';
import { white } from '../white';

export const blue900: MaterialPaletteColor = {
  color: {
    dark: {
      color: '#002171',
      onColor: white,
    },
    light: {
      color: '#5472d3',
      onColor: black,
    },
    normal: {
      color: '#0d47a1',
      onColor: white,
    },
  },
  name: 'Blue',
  tone: '900',
};
