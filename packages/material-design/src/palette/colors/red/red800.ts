/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { black } from '../black';
import { MaterialPaletteColor } from '../MaterialPaletteColor';
import { white } from '../white';

export const red800: MaterialPaletteColor = {
  color: {
    dark: {
      color: '#8e0000',
      onColor: white,
    },
    light: {
      color: '#ff5f52',
      onColor: black,
    },
    normal: {
      color: '#c62828',
      onColor: white,
    },
  },
  name: 'Red',
  tone: '800',
};
