/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { black } from '../black';
import { MaterialPaletteColor } from '../MaterialPaletteColor';
import { white } from '../white';

export const red500: MaterialPaletteColor = {
  color: {
    dark: {
      color: '#ba000d',
      onColor: white,
    },
    light: {
      color: '#ff7961',
      onColor: black,
    },
    normal: {
      color: '#f44336',
      onColor: black,
    },
  },
  name: 'Red',
  tone: '500',
};
