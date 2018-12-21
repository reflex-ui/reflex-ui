/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { black } from '../black';
import { MaterialPaletteColor } from '../MaterialPaletteColor';
import { white } from '../white';

export const deepPurple300: MaterialPaletteColor = {
  color: {
    dark: {
      color: '#65499c',
      onColor: white,
    },
    light: {
      color: '#c7a4ff',
      onColor: black,
    },
    normal: {
      color: '#9575cd',
      onColor: black,
    },
  },
  name: 'Deep Purple',
  tone: '300',
};
