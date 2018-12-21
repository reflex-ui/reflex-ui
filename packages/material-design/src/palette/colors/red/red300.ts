/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { black } from '../black';
import { MaterialPaletteColor } from '../MaterialPaletteColor';
import { white } from '../white';

export const red300: MaterialPaletteColor = {
  color: {
    dark: {
      color: '#af4448',
      onColor: white,
    },
    light: {
      color: '#ffa4a2',
      onColor: black,
    },
    normal: {
      color: '#e57373',
      onColor: black,
    },
  },
  name: 'Red',
  tone: '300',
};
