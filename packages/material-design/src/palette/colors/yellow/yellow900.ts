/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { black } from '../black';
import { MaterialPaletteColor } from '../MaterialPaletteColor';
import { white } from '../white';

export const yellow900: MaterialPaletteColor = {
  color: {
    dark: {
      color: '#bc5100',
      onColor: white,
    },
    light: {
      color: '#ffb04c',
      onColor: black,
    },
    normal: {
      color: '#f57f17',
      onColor: black,
    },
  },
  name: 'Yellow',
  tone: '900',
};
