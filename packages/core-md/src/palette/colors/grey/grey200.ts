/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PaletteColor } from '@reflex-ui/core';

import { black } from '../black/black';
import { white } from '../white/white';

export const grey200: PaletteColor = {
  dark: {
    color: '#bcbcbc',
    onColor: black,
  },
  light: {
    color: white,
    onColor: black,
  },
  normal: {
    color: '#eeeeee',
    onColor: black,
  },
};
