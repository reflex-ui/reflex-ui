/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { black } from '../black';
import { MaterialPaletteColor } from '../MaterialPaletteColor';

export const red200: MaterialPaletteColor = {
  color: {
    dark: {
      color: '#ba6b6c',
      onColor: black,
    },
    light: {
      color: '#ffcccb',
      onColor: black,
    },
    normal: {
      color: '#ef9a9a',
      onColor: black,
    },
  },
  name: 'Red',
  tone: '200',
};
