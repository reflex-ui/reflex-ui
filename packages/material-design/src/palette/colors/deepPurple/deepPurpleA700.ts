/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { black } from '../black';
import { MaterialPaletteColor } from '../MaterialPaletteColor';
import { white } from '../white';

export const deepPurpleA700: MaterialPaletteColor = {
  color: {
    dark: {
      color: '#0a00b6',
      onColor: white,
    },
    light: {
      color: '#9d46ff',
      onColor: black,
    },
    normal: {
      color: '#6200ea',
      onColor: white,
    },
  },
  name: 'Deep Purple',
  tone: '700',
};
