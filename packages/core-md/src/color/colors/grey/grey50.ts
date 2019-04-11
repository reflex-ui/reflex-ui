/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LayeredColor } from '@reflex-ui/core';

import { black } from '../black/black';
import { white } from '../white/white';

export const grey50: LayeredColor = {
  color: '#fafafa',
  onColor: black,
};

export const grey50Dark: LayeredColor = {
  color: '#c7c7c7',
  onColor: black,
};

export const grey50Light: LayeredColor = {
  color: white,
  onColor: black,
};
