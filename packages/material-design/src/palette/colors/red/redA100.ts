/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { black } from '../black';
import { MaterialPaletteColor } from '../MaterialPaletteColor';

export const redA100: MaterialPaletteColor = {
  color: {
    dark: {
      color: '#c85a54',
      onColor: black,
    },
    light: {
      color: '#ffbcaf',
      onColor: black,
    },
    normal: {
      color: '#ff8a80',
      onColor: black,
    },
  },
  name: 'Red',
  tone: 'A100',
};
