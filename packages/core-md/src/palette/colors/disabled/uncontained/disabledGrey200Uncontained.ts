/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PaletteColorVariant } from '@reflex-ui/core';

import { grey200Normal } from '../../grey/grey200';
import { transparent } from '../../transparent';

export const disabledGrey200Uncontained: PaletteColorVariant = {
  color: transparent,
  onColor: grey200Normal.color,
};
