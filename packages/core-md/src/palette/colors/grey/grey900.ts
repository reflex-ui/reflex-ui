/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PaletteColorVariant } from '@reflex-ui/core';

import { black } from '../black/black';
import { white } from '../white/white';

export const grey900Dark: PaletteColorVariant = {
  color: black,
  onColor: white,
};

export const grey900Light: PaletteColorVariant = {
  color: '#484848',
  onColor: white,
};

export const grey900Normal: PaletteColorVariant = {
  color: '#212121',
  onColor: white,
};
