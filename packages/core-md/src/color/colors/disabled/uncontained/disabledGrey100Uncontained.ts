/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LayeredColor } from '@reflex-ui/core';

import { grey100 } from '../../grey/grey100';
import { transparent } from '../../transparent';

export const disabledGrey100Uncontained: LayeredColor = {
  color: transparent,
  onColor: grey100.color,
};
