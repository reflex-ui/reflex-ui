/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PaletteColorVariant } from '@reflex-ui/core';

import { grey300Normal } from '../../grey/grey300';
import { grey400Dark } from '../../grey/grey400';

export const disabledGrey300Contained: PaletteColorVariant = {
  color: grey300Normal.color,
  onColor: grey400Dark.color,
};
