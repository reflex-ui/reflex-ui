/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LayeredColor } from '@reflex-ui/core';

import { black } from '../black/black';
import { white } from '../white/white';

export const grey500: LayeredColor = {
  color: '#9e9e9e',
  onColor: black,
};

export const grey500Dark: LayeredColor = {
  color: '#707070',
  onColor: white,
};

export const grey500Light: LayeredColor = {
  color: '#cfcfcf',
  onColor: black,
};
