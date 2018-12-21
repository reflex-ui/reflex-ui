/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { black } from '../black';
import { MaterialPaletteColor } from '../MaterialPaletteColor';
import { white } from '../white';

export const deepPurpleA100: MaterialPaletteColor = {
  color: {
    dark: {
      color: '#805acb',
      onColor: white,
    },
    light: {
      color: '#e7b9ff',
      onColor: black,
    },
    normal: {
      color: '#b388ff',
      onColor: black,
    },
  },
  name: 'Deep Purple',
  tone: 'A100',
};
