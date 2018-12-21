/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { black } from '../black';
import { MaterialPaletteColor } from '../MaterialPaletteColor';
import { white } from '../white';

export const redA400: MaterialPaletteColor = {
  color: {
    dark: {
      color: '#c4001d',
      onColor: white,
    },
    light: {
      color: '#ff616f',
      onColor: black,
    },
    normal: {
      color: '#ff1744',
      onColor: black,
    },
  },
  name: 'Red',
  tone: '400',
};
