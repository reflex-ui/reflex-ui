/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { black } from '../black';
import { MaterialPaletteColor } from '../MaterialPaletteColor';
import { white } from '../white';

export const green50: MaterialPaletteColor = {
  color: {
    dark: {
      color: '#b6c2b7',
      onColor: black,
    },
    light: {
      color: white,
      onColor: black,
    },
    normal: {
      color: '#e8f5e9',
      onColor: black,
    },
  },
  name: 'Green',
  tone: '50',
};
