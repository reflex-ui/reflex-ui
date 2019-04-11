/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LayeredColor } from '@reflex-ui/core';

import { black } from '../black/black';
import { white } from '../white/white';

export const grey700: LayeredColor = {
  color: '#616161',
  onColor: white,
};

export const grey700Dark: LayeredColor = {
  color: '#373737',
  onColor: white,
};

export const grey700Light: LayeredColor = {
  color: '#8e8e8e',
  onColor: black,
};
