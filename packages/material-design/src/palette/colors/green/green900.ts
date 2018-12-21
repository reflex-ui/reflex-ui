/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { black } from '../black';
import { MaterialPaletteColor } from '../MaterialPaletteColor';
import { white } from '../white';

export const green900: MaterialPaletteColor = {
  color: {
    dark: {
      color: '#003300',
      onColor: white,
    },
    light: {
      color: '#4c8c4a',
      onColor: black,
    },
    normal: {
      color: '#1b5e20',
      onColor: white,
    },
  },
  name: 'Green',
  tone: '900',
};
