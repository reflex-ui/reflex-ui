/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { black } from '../black';
import { MaterialPaletteColor } from '../MaterialPaletteColor';
import { white } from '../white';

export const green700: MaterialPaletteColor = {
  color: {
    dark: {
      color: '#00600f',
      onColor: white,
    },
    light: {
      color: '#6abf69',
      onColor: black,
    },
    normal: {
      color: '#388e3c',
      onColor: white,
    },
  },
  name: 'Green',
  tone: '700',
};
