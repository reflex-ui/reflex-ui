/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { black } from '../black';
import { MaterialPaletteColor } from '../MaterialPaletteColor';
import { white } from '../white';

export const green800: MaterialPaletteColor = {
  color: {
    dark: {
      color: '#005005',
      onColor: white,
    },
    light: {
      color: '#60ad5e',
      onColor: black,
    },
    normal: {
      color: '#2e7d32',
      onColor: white,
    },
  },
  name: 'Green',
  tone: '800',
};
