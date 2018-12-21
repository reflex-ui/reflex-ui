/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { black } from '../black';
import { MaterialPaletteColor } from '../MaterialPaletteColor';
import { white } from '../white';

export const deepPurpleA400: MaterialPaletteColor = {
  color: {
    dark: {
      color: '#0100ca',
      onColor: white,
    },
    light: {
      color: '#a255ff',
      onColor: black,
    },
    normal: {
      color: '#651fff',
      onColor: white,
    },
  },
  name: 'Deep Purple',
  tone: '400',
};
