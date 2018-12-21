/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { black } from '../black';
import { MaterialPaletteColor } from '../MaterialPaletteColor';
import { white } from '../white';

export const blueA200: MaterialPaletteColor = {
  color: {
    dark: {
      color: '#005ecb',
      onColor: white,
    },
    light: {
      color: '#83b9ff',
      onColor: black,
    },
    normal: {
      color: '#448aff',
      onColor: black,
    },
  },
  name: 'Blue',
  tone: 'A200',
};
