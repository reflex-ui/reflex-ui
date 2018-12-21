/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { black } from '../black';
import { MaterialPaletteColor } from '../MaterialPaletteColor';
import { white } from '../white';

export const blue700: MaterialPaletteColor = {
  color: {
    dark: {
      color: '#004ba0',
      onColor: white,
    },
    light: {
      color: '#63a4ff',
      onColor: black,
    },
    normal: {
      color: '#1976d2',
      onColor: white,
    },
  },
  name: 'Blue',
  tone: '700',
};
