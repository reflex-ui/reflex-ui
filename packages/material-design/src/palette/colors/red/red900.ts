/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PaletteColor } from '@reflex-ui/core';

import { black } from '../black/black';
import { white } from '../white/white';

export const red900: PaletteColor = {
  dark: {
    color: '#7f0000',
    onColor: white,
  },
  light: {
    color: '#f05545',
    onColor: black,
  },
  normal: {
    color: '#b71c1c',
    onColor: black,
  },
};
