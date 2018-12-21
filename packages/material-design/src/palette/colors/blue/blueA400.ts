/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { black } from '../black';
import { MaterialPaletteColor } from '../MaterialPaletteColor';
import { white } from '../white';

export const blueA400: MaterialPaletteColor = {
  color: {
    dark: {
      color: '#004ecb',
      onColor: white,
    },
    light: {
      color: '#75a7ff',
      onColor: black,
    },
    normal: {
      color: '#2979ff',
      onColor: black,
    },
  },
  name: 'Blue',
  tone: '400',
};
