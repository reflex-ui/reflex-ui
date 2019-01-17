/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PaletteColor } from '@reflex-ui/core';

import { black } from '../black/black';
import { white } from '../white/white';

export const grey500: PaletteColor = {
  dark: {
    color: '#707070',
    onColor: white,
  },
  light: {
    color: '#cfcfcf',
    onColor: black,
  },
  normal: {
    color: '#9e9e9e',
    onColor: black,
  },
};
