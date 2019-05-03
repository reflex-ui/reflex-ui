/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LayeredColor, PaletteColor } from '@reflex-ui/core';
import {
  createMdFlexColor,
  disabledGrey300Contained,
  disabledGrey400Uncontained,
  disabledGrey500Uncontained,
} from '@reflex-ui/core-md';

export const pinkLayeredColor: LayeredColor = {
  color: '#c70ad0',
  onColor: '#fff',
};

export const pink: PaletteColor = {
  color: createMdFlexColor({
    containedColor: pinkLayeredColor,
    containedColorDisabled: disabledGrey300Contained,
    containedInvertedColorDisabled: disabledGrey300Contained,
    uncontainedColorDisabled: disabledGrey400Uncontained,
    uncontainedInvertedColorDisabled: disabledGrey500Uncontained,
  }),
  name: 'Custom Pink',
};
