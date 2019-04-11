/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  createFlexColor,
  createLayeredColorUsingColorOnly,
  createLayeredColorUsingOnColorOnly,
  invertLayeredColor,
  LayeredColor,
  PaletteColor,
} from '@reflex-ui/core';

import { createContainedLayeredColor } from '../../createContainedLayeredColor';
// tslint:disable-next-line:max-line-length
import { createUncontainedLayeredColor } from '../../createUncontainedLayeredColor';
import { black } from '../black/black';
import { disabledGrey300Contained } from '../disabled/contained';
import { disabledGrey500Uncontained } from '../disabled/uncontained';
import { white } from './white';

const whiteLayeredColor: LayeredColor = {
  color: white,
  onColor: black,
};

export const mdWhite: PaletteColor = {
  color: createFlexColor({
    containedColor: whiteLayeredColor,
    containedColorDisabled: disabledGrey300Contained,
    containedColorFactory: createContainedLayeredColor,
    containedInvertedColor: invertLayeredColor(whiteLayeredColor),
    containedInvertedColorDisabled: disabledGrey300Contained,
    uncontainedColor: createLayeredColorUsingOnColorOnly(whiteLayeredColor),
    uncontainedColorDisabled: disabledGrey500Uncontained,
    uncontainedColorFactory: createUncontainedLayeredColor,
    uncontainedInvertedColor: createLayeredColorUsingColorOnly(
      whiteLayeredColor,
    ),
    uncontainedInvertedColorDisabled: disabledGrey500Uncontained,
  }),
  name: 'White',
};
