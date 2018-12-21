/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { black } from '../black';
import { MaterialPaletteColor } from '../MaterialPaletteColor';
import { white } from '../white';

export const redA200: MaterialPaletteColor = {
  color: {
    dark: {
      color: '#c50e29',
      onColor: white,
    },
    light: {
      color: '#ff867f',
      onColor: black,
    },
    normal: {
      color: '#ff5252',
      onColor: black,
    },
  },
  name: 'Red',
  tone: 'A200',
};
