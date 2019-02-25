/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PaletteColor } from '@reflex-ui/core';

import { grey500 } from '../../grey/grey500';
import { transparent } from '../../transparent';

export const disabledGrey500: PaletteColor = {
  dark: {
    color: transparent,
    onColor: grey500.normal.color,
  },
  light: {
    color: transparent,
    onColor: grey500.normal.color,
  },
  normal: {
    color: transparent,
    onColor: grey500.normal.color,
  },
};
