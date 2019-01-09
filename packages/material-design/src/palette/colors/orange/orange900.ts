/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { black } from '../black';
import { MaterialPaletteColor } from '../MaterialPaletteColor';
import { white } from '../white';

export const orange900: MaterialPaletteColor = {
  color: {
    dark: {
      color: '#ac1900',
      onColor: white,
    },
    light: {
      color: '#ff833a',
      onColor: black,
    },
    normal: {
      color: '#e65100',
      onColor: black,
    },
  },
  name: 'Orange',
  tone: '900',
};
