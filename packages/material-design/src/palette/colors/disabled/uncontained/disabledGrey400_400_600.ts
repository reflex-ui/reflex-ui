/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PaletteColor } from '@reflex-ui/core';

import { grey400 } from '../../grey/grey400';
import { grey600 } from '../../grey/grey600';
import { transparent } from '../../transparent';

// tslint:disable-next-line:variable-name
export const disabledGrey400_400_600: PaletteColor = {
  dark: {
    color: transparent,
    onColor: grey400,
  },
  light: {
    color: transparent,
    onColor: grey600,
  },
  normal: {
    color: transparent,
    onColor: grey400,
  },
};
