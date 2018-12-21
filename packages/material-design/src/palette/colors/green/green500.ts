/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { black } from '../black';
import { MaterialPaletteColor } from '../MaterialPaletteColor';
import { white } from '../white';

export const green500: MaterialPaletteColor = {
  color: {
    dark: {
      color: '#087f23',
      onColor: white,
    },
    light: {
      color: '#80e27e',
      onColor: black,
    },
    normal: {
      color: '#4caf50',
      onColor: black,
    },
  },
  name: 'Green',
  tone: '500',
};
