/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { black } from '../black';
import { MaterialPaletteColor } from '../MaterialPaletteColor';
import { white } from '../white';

export const blue600: MaterialPaletteColor = {
  color: {
    dark: {
      color: '#005cb2',
      onColor: white,
    },
    light: {
      color: '#6ab7ff',
      onColor: black,
    },
    normal: {
      color: '#1e88e5',
      onColor: black,
    },
  },
  name: 'Blue',
  tone: '600',
};
