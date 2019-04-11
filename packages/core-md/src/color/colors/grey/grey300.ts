/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LayeredColor } from '@reflex-ui/core';

import { black } from '../black/black';
import { white } from '../white/white';

export const grey300: LayeredColor = {
  color: '#e0e0e0',
  onColor: black,
};

export const grey300Dark: LayeredColor = {
  color: '#aeaeae',
  onColor: black,
};

export const grey300Light: LayeredColor = {
  color: white,
  onColor: black,
};
