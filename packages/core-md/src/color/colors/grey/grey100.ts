/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LayeredColor } from '@reflex-ui/core';

import { black } from '../black/black';
import { white } from '../white/white';

export const grey100: LayeredColor = {
  color: '#f5f5f5',
  onColor: black,
};

export const grey100Dark: LayeredColor = {
  color: '#c2c2c2',
  onColor: black,
};

export const grey100Light: LayeredColor = {
  color: white,
  onColor: black,
};
