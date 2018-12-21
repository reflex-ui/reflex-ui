/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { black } from '../black';
import { MaterialPaletteColor } from '../MaterialPaletteColor';
import { white } from '../white';

export const teal600: MaterialPaletteColor = {
  color: {
    dark: {
      color: '#005b4f',
      onColor: white,
    },
    light: {
      color: '#4ebaaa',
      onColor: black,
    },
    normal: {
      color: '#00897b',
      onColor: black,
    },
  },
  name: 'Teal',
  tone: '600',
};
