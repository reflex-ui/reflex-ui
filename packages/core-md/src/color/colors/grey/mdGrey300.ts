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
  disabledGrey500Uncontained,
  disabledGrey600Uncontained,
} from '../disabled/uncontained';
import { grey300, grey300Dark, grey300Light } from './grey300';

export const mdGrey300: PaletteColor = {
  color: createFlexColor({
    containedColor: grey300,
    containedColorDisabled: disabledGrey300Contained,
    containedColorFactory: createContainedLayeredColor,
    containedInvertedColor: invertLayeredColor(grey300),
    containedInvertedColorDisabled: disabledGrey300Contained,
    uncontainedColor: createLayeredColorUsingOnColorOnly(grey300),
    uncontainedColorDisabled: disabledGrey600Uncontained,
    uncontainedColorFactory: createUncontainedLayeredColor,
    uncontainedInvertedColor: createLayeredColorUsingColorOnly(grey300),
    uncontainedInvertedColorDisabled: disabledGrey500Uncontained,
  }),
  name: 'Grey',
  tone: '300',
};

export const mdGrey300Dark: PaletteColor = {
  color: createFlexColor({
    containedColor: grey300Dark,
    containedColorDisabled: disabledGrey300Contained,
    containedColorFactory: createContainedLayeredColor,
    containedInvertedColor: invertLayeredColor(grey300Dark),
    containedInvertedColorDisabled: disabledGrey300Contained,
    uncontainedColor: createLayeredColorUsingOnColorOnly(grey300Dark),
    uncontainedColorDisabled: disabledGrey500Uncontained,
    uncontainedColorFactory: createUncontainedLayeredColor,
    uncontainedInvertedColor: createLayeredColorUsingColorOnly(grey300Dark),
    uncontainedInvertedColorDisabled: disabledGrey500Uncontained,
  }),
  name: 'Grey',
  tone: '300 Dark',
};

export const mdGrey300Light: PaletteColor = {
  color: createFlexColor({
    containedColor: grey300Light,
    containedColorDisabled: disabledGrey300Contained,
    containedColorFactory: createContainedLayeredColor,
    containedInvertedColor: invertLayeredColor(grey300Light),
    containedInvertedColorDisabled: disabledGrey300Contained,
    uncontainedColor: createLayeredColorUsingOnColorOnly(grey300Light),
    uncontainedColorDisabled: disabledGrey600Uncontained,
    uncontainedColorFactory: createUncontainedLayeredColor,
    uncontainedInvertedColor: createLayeredColorUsingColorOnly(grey300Light),
    uncontainedInvertedColorDisabled: disabledGrey500Uncontained,
  }),
  name: 'Grey',
  tone: '300 Light',
};
