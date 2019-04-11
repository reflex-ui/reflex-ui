/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LayeredColor } from '@reflex-ui/core';

import { grey50 } from '../../grey/grey50';
import { transparent } from '../../transparent';

export const disabledGrey50Uncontained: LayeredColor = {
  color: transparent,
  onColor: grey50.color,
};
