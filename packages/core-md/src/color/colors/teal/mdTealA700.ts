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
  PaletteColor,
} from '@reflex-ui/core';

import { createContainedLayeredColor } from '../../createContainedLayeredColor';
// tslint:disable-next-line:max-line-length
import { createUncontainedLayeredColor } from '../../createUncontainedLayeredColor';
import { disabledGrey300Contained } from '../disabled/contained';
import {
  disabledGrey400Uncontained,
  disabledGrey500Uncontained,
  disabledGrey600Uncontained,
} from '../disabled/uncontained';
import { tealA700, tealA700Dark, tealA700Light } from './tealA700';

export const mdTealA700: PaletteColor = {
  color: createFlexColor({
    containedColor: tealA700,
    containedColorDisabled: disabledGrey300Contained,
    containedColorFactory: createContainedLayeredColor,
    containedInvertedColor: invertLayeredColor(tealA700),
    containedInvertedColorDisabled: disabledGrey300Contained,
    uncontainedColor: createLayeredColorUsingOnColorOnly(tealA700),
    uncontainedColorDisabled: disabledGrey600Uncontained,
    uncontainedColorFactory: createUncontainedLayeredColor,
    uncontainedInvertedColor: createLayeredColorUsingColorOnly(tealA700),
    uncontainedInvertedColorDisabled: disabledGrey500Uncontained,
  }),
  name: 'Teal',
  tone: 'A700',
};

export const mdTealA700Dark: PaletteColor = {
  color: createFlexColor({
    containedColor: tealA700Dark,
    containedColorDisabled: disabledGrey300Contained,
    containedColorFactory: createContainedLayeredColor,
    containedInvertedColor: invertLayeredColor(tealA700Dark),
    containedInvertedColorDisabled: disabledGrey300Contained,
    uncontainedColor: createLayeredColorUsingOnColorOnly(tealA700Dark),
    uncontainedColorDisabled: disabledGrey400Uncontained,
    uncontainedColorFactory: createUncontainedLayeredColor,
    uncontainedInvertedColor: createLayeredColorUsingColorOnly(tealA700Dark),
    uncontainedInvertedColorDisabled: disabledGrey500Uncontained,
  }),
  name: 'Teal',
  tone: 'A700 Dark',
};

export const mdTealA700Light: PaletteColor = {
  color: createFlexColor({
    containedColor: tealA700Light,
    containedColorDisabled: disabledGrey300Contained,
    containedColorFactory: createContainedLayeredColor,
    containedInvertedColor: invertLayeredColor(tealA700Light),
    containedInvertedColorDisabled: disabledGrey300Contained,
    uncontainedColor: createLayeredColorUsingOnColorOnly(tealA700Light),
    uncontainedColorDisabled: disabledGrey600Uncontained,
    uncontainedColorFactory: createUncontainedLayeredColor,
    uncontainedInvertedColor: createLayeredColorUsingColorOnly(tealA700Light),
    uncontainedInvertedColorDisabled: disabledGrey500Uncontained,
  }),
  name: 'Teal',
  tone: 'A700 Light',
};
