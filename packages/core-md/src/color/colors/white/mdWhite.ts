/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LayeredColor, PaletteColor } from '@reflex-ui/core';

import { createMdFlexColor } from '../../createMdFlexColor';
import { black } from '../black/black';
import { disabledGrey300Contained } from '../disabled/contained';
import { disabledGrey500Uncontained } from '../disabled/uncontained';
import { white } from './white';

const whiteLayeredColor: LayeredColor = {
  color: white,
  onColor: black,
};

export const mdWhite: PaletteColor = {
  color: createMdFlexColor({
    containedColor: whiteLayeredColor,
    containedColorDisabled: disabledGrey300Contained,
    containedInvertedColorDisabled: disabledGrey300Contained,
    uncontainedColorDisabled: disabledGrey500Uncontained,
    uncontainedInvertedColorDisabled: disabledGrey500Uncontained,
  }),
  name: 'White',
};
