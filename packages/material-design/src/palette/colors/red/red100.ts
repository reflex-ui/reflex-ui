/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { black } from '../black';
import { MaterialPaletteColor } from '../MaterialPaletteColor';
import { white } from '../white';

export const red100: MaterialPaletteColor = {
  color: {
    dark: {
      color: '#cb9ca1',
      onColor: black,
    },
    light: {
      color: white,
      onColor: black,
    },
    normal: {
      color: '#ffcdd2',
      onColor: black,
    },
  },
  name: 'Red',
  tone: '100',
};
