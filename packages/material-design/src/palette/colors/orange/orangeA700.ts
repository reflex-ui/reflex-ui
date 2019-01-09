/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { black } from '../black';
import { MaterialPaletteColor } from '../MaterialPaletteColor';
import { white } from '../white';

export const orangeA700: MaterialPaletteColor = {
  color: {
    dark: {
      color: '#c43c00',
      onColor: white,
    },
    light: {
      color: '#ff9e40',
      onColor: black,
    },
    normal: {
      color: '#ff6d00',
      onColor: black,
    },
  },
  name: 'Orange',
  tone: '700',
};
