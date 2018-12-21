/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { black } from '../black';
import { MaterialPaletteColor } from '../MaterialPaletteColor';
import { white } from '../white';

export const red700: MaterialPaletteColor = {
  color: {
    dark: {
      color: '#9a0007',
      onColor: white,
    },
    light: {
      color: '#ff6659',
      onColor: black,
    },
    normal: {
      color: '#d32f2f',
      onColor: white,
    },
  },
  name: 'Red',
  tone: '700',
};
