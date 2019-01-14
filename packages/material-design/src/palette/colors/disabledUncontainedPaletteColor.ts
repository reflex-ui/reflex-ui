/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PaletteColor } from '@reflex-ui/core';

import { transparent } from './transparent';

export const disabledUncontainedPaletteColor: PaletteColor = {
  dark: {
    color: transparent, // rgba(0, 0, 0, 0.24)
    onColor: '#9B9B9B', // rgba(0, 0, 0, 0.20)
  },
  light: {
    color: transparent, // rgba(0, 0, 0, 0.06)
    onColor: '#ADADAD', // rgba(0, 0, 0, 0.32)
  },
  normal: {
    color: transparent, // rgba(0, 0, 0, 0.12)
    onColor: '#A1A1A1', // rgba(0, 0, 0, 0.37)
  },
};
