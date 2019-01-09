/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { black } from '../black';
import { MaterialPaletteColor } from '../MaterialPaletteColor';
import { white } from '../white';

export const orange50: MaterialPaletteColor = {
  color: {
    dark: {
      color: '#ccc0ae',
      onColor: black,
    },
    light: {
      color: white,
      onColor: black,
    },
    normal: {
      color: '#fff3e0',
      onColor: black,
    },
  },
  name: 'Orange',
  tone: '50',
};
