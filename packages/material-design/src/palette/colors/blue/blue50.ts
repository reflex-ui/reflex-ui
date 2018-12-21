/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { black } from '../black';
import { MaterialPaletteColor } from '../MaterialPaletteColor';
import { white } from '../white';

export const blue50: MaterialPaletteColor = {
  color: {
    dark: {
      color: '#b1bfca',
      onColor: black,
    },
    light: {
      color: white,
      onColor: black,
    },
    normal: {
      color: '#e3f2fd',
      onColor: black,
    },
  },
  name: 'Blue',
  tone: '50',
};
