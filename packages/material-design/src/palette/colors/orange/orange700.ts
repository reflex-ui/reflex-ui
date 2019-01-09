/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { black } from '../black';
import { MaterialPaletteColor } from '../MaterialPaletteColor';
import { white } from '../white';

export const orange700: MaterialPaletteColor = {
  color: {
    dark: {
      color: '#bb4d00',
      onColor: white,
    },
    light: {
      color: '#ffad42',
      onColor: black,
    },
    normal: {
      color: '#f57c00',
      onColor: black,
    },
  },
  name: 'Orange',
  tone: '700',
};
