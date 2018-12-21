/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { black } from '../black';
import { MaterialPaletteColor } from '../MaterialPaletteColor';
import { white } from '../white';

export const deepPurple50: MaterialPaletteColor = {
  color: {
    dark: {
      color: '#bbb5c3',
      onColor: black,
    },
    light: {
      color: white,
      onColor: black,
    },
    normal: {
      color: '#ede7f6',
      onColor: black,
    },
  },
  name: 'Deep Purple',
  tone: '50',
};
