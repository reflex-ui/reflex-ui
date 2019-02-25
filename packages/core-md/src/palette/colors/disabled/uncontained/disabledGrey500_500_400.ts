/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PaletteColor } from '@reflex-ui/core';

import { grey400 } from '../../grey/grey400';
import { grey500 } from '../../grey/grey500';
import { transparent } from '../../transparent';

// tslint:disable-next-line:variable-name
export const disabledGrey500_500_400: PaletteColor = {
  dark: {
    color: transparent,
    onColor: grey500.normal.color,
  },
  light: {
    color: transparent,
    onColor: grey400.normal.color,
  },
  normal: {
    color: transparent,
    onColor: grey500.normal.color,
  },
};
