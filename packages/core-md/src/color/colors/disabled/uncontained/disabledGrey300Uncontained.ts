/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LayeredColor } from '@reflex-ui/core';

import { grey300 } from '../../grey/grey300';
import { transparent } from '../../transparent';

export const disabledGrey300Uncontained: LayeredColor = {
  color: transparent,
  onColor: grey300.color,
};
