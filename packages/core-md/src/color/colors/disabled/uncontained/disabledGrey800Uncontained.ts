/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LayeredColor } from '@reflex-ui/core';

import { grey800 } from '../../grey/grey800';
import { transparent } from '../../transparent';

export const disabledGrey800Uncontained: LayeredColor = {
  color: transparent,
  onColor: grey800.color,
};
