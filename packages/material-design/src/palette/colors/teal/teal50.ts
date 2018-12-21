/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { black } from '../black';
import { MaterialPaletteColor } from '../MaterialPaletteColor';
import { white } from '../white';

export const teal50: MaterialPaletteColor = {
  color: {
    dark: {
      color: '#aebfbe',
      onColor: black,
    },
    light: {
      color: white,
      onColor: black,
    },
    normal: {
      color: '#e0f2f1',
      onColor: black,
    },
  },
  name: 'Teal',
  tone: '50',
};
