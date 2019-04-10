/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LayeredColor } from '@reflex-ui/core';

import { grey700 } from '../../grey/grey700';
import { transparent } from '../../transparent';

export const disabledGrey700Uncontained: LayeredColor = {
  color: transparent,
  onColor: grey700.color,
};
