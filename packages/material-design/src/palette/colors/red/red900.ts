/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { black } from '../black';
import { MaterialPaletteColor } from '../MaterialPaletteColor';
import { white } from '../white';

export const red900: MaterialPaletteColor = {
  color: {
    dark: {
      color: '#7f0000',
      onColor: white,
    },
    light: {
      color: '#f05545',
      onColor: black,
    },
    normal: {
      color: '#b71c1c',
      onColor: white,
    },
  },
  name: 'Red',
  tone: '900',
};
