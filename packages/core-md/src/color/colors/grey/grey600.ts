/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LayeredColor } from '@reflex-ui/core';

import { black } from '../black/black';
import { white } from '../white/white';

export const grey600: LayeredColor = {
  color: '#757575',
  onColor: white,
};

export const grey600Dark: LayeredColor = {
  color: '#494949',
  onColor: white,
};

export const grey600Light: LayeredColor = {
  color: '#a4a4a4',
  onColor: black,
};
