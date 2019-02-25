/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PaletteColor } from '@reflex-ui/core';

import { black } from '../black/black';
import { white } from '../white/white';

export const blue500: PaletteColor = {
  dark: {
    color: '#0069c0',
    onColor: white,
  },
  light: {
    color: '#6ec6ff',
    onColor: black,
  },
  normal: {
    color: '#2196f3',
    onColor: black,
  },
};
