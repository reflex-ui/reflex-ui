/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { black } from '../black';
import { MaterialPaletteColor } from '../MaterialPaletteColor';
import { white } from '../white';

export const blue400: MaterialPaletteColor = {
  color: {
    dark: {
      color: '#0077c2',
      onColor: white,
    },
    light: {
      color: '#80d6ff',
      onColor: black,
    },
    normal: {
      color: '#42a5f5',
      onColor: black,
    },
  },
  name: 'Blue',
  tone: '400',
};
