/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { black } from '../black';
import { MaterialPaletteColor } from '../MaterialPaletteColor';
import { white } from '../white';

export const teal400: MaterialPaletteColor = {
  color: {
    dark: {
      color: '#00766c',
      onColor: white,
    },
    light: {
      color: '#64d8cb',
      onColor: black,
    },
    normal: {
      color: '#26a69a',
      onColor: black,
    },
  },
  name: 'Teal',
  tone: '400',
};
