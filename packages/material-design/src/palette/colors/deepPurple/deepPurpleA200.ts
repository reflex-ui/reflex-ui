/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { black } from '../black';
import { MaterialPaletteColor } from '../MaterialPaletteColor';
import { white } from '../white';

export const deepPurpleA200: MaterialPaletteColor = {
  color: {
    dark: {
      color: '#3f1dcb',
      onColor: white,
    },
    light: {
      color: '#b47cff',
      onColor: black,
    },
    normal: {
      color: '#7c4dff',
      onColor: white,
    },
  },
  name: 'Deep Purple',
  tone: 'A200',
};
