/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { black } from '../black';
import { MaterialPaletteColor } from '../MaterialPaletteColor';
import { white } from '../white';

export const teal500: MaterialPaletteColor = {
  color: {
    dark: {
      color: '#00675b',
      onColor: white,
    },
    light: {
      color: '#52c7b8',
      onColor: black,
    },
    normal: {
      color: '#009688',
      onColor: black,
    },
  },
  name: 'Teal',
  tone: '500',
};
