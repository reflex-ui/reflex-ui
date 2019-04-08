/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PaletteColorVariant } from '@reflex-ui/core';

import { black } from '../black/black';
import { white } from '../white/white';

export const grey50Dark: PaletteColorVariant = {
  color: '#c7c7c7',
  onColor: black,
};

export const grey50Light: PaletteColorVariant = {
  color: white,
  onColor: black,
};

export const grey50Normal: PaletteColorVariant = {
  color: '#fafafa',
  onColor: black,
};
