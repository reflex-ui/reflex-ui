/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { black } from '../black';
import { MaterialPaletteColor } from '../MaterialPaletteColor';
import { white } from '../white';

export const orangeA200: MaterialPaletteColor = {
  color: {
    dark: {
      color: '#c77c02',
      onColor: white,
    },
    light: {
      color: '#ffdd71',
      onColor: black,
    },
    normal: {
      color: '#ffab40',
      onColor: black,
    },
  },
  name: 'Orange',
  tone: 'A200',
};
