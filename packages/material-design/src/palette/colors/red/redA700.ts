/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { black } from '../black';
import { MaterialPaletteColor } from '../MaterialPaletteColor';
import { white } from '../white';

export const redA700: MaterialPaletteColor = {
  color: {
    dark: {
      color: '#9b0000',
      onColor: white,
    },
    light: {
      color: '#ff5131',
      onColor: black,
    },
    normal: {
      color: '#d50000',
      onColor: white,
    },
  },
  name: 'Red',
  tone: '700',
};
