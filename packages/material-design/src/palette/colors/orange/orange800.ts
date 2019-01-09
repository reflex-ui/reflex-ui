/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { black } from '../black';
import { MaterialPaletteColor } from '../MaterialPaletteColor';
import { white } from '../white';

export const orange800: MaterialPaletteColor = {
  color: {
    dark: {
      color: '#b53d00',
      onColor: white,
    },
    light: {
      color: '#ff9d3f',
      onColor: black,
    },
    normal: {
      color: '#ef6c00',
      onColor: black,
    },
  },
  name: 'Orange',
  tone: '800',
};
