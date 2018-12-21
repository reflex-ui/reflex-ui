/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { black } from '../black';
import { MaterialPaletteColor } from '../MaterialPaletteColor';
import { white } from '../white';

export const blue500: MaterialPaletteColor = {
  color: {
    dark: {
      color: '#0069c0',
      onColor: white,
    },
    light: {
      color: '#6ec6ff',
      onColor: black,
    },
    normal: {
      color: '#2196f3',
      onColor: black,
    },
  },
  name: 'Blue',
  tone: '500',
};
