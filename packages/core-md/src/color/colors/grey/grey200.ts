/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LayeredColor } from '@reflex-ui/core';

import { black } from '../black/black';
import { white } from '../white/white';

export const grey200: LayeredColor = {
  color: '#eeeeee',
  onColor: black,
};

export const grey200Dark: LayeredColor = {
  color: '#bcbcbc',
  onColor: black,
};

export const grey200Light: LayeredColor = {
  color: white,
  onColor: black,
};
