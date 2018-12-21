/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { black } from '../black';
import { MaterialPaletteColor } from '../MaterialPaletteColor';
import { white } from '../white';

export const blueA700: MaterialPaletteColor = {
  color: {
    dark: {
      color: '#0039cb',
      onColor: white,
    },
    light: {
      color: '#768fff',
      onColor: black,
    },
    normal: {
      color: '#2962ff',
      onColor: white,
    },
  },
  name: 'Blue',
  tone: '700',
};
