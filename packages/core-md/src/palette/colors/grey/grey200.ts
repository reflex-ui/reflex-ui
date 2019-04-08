/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PaletteColorVariant } from '@reflex-ui/core';

import { black } from '../black/black';
import { white } from '../white/white';

export const grey200Dark: PaletteColorVariant = {
  color: '#bcbcbc',
  onColor: black,
};

export const grey200Light: PaletteColorVariant = {
  color: white,
  onColor: black,
};

export const grey200Normal: PaletteColorVariant = {
  color: '#eeeeee',
  onColor: black,
};
