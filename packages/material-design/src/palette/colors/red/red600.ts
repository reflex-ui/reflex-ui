/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { black } from '../black';
import { MaterialPaletteColor } from '../MaterialPaletteColor';
import { white } from '../white';

export const red600: MaterialPaletteColor = {
  color: {
    dark: {
      color: '#ab000d',
      onColor: white,
    },
    light: {
      color: '#ff6f60',
      onColor: black,
    },
    normal: {
      color: '#e53935',
      onColor: black,
    },
  },
  name: 'Red',
  tone: '600',
};
