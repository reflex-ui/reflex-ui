/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PaletteColorVariant } from '@reflex-ui/core';

import { grey900Normal } from '../../grey/grey900';
import { transparent } from '../../transparent';

export const disabledGrey900Uncontained: PaletteColorVariant = {
  color: transparent,
  onColor: grey900Normal.color,
};
