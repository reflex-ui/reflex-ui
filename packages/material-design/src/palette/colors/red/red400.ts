/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { black } from '../black';
import { MaterialPaletteColor } from '../MaterialPaletteColor';
import { white } from '../white';

export const red400: MaterialPaletteColor = {
  color: {
    dark: {
      color: '#b61827',
      onColor: white,
    },
    light: {
      color: '#ff867c',
      onColor: black,
    },
    normal: {
      color: '#ef5350',
      onColor: black,
    },
  },
  name: 'Red',
  tone: '400',
};
