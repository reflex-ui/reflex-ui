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
import { grey700, grey700Dark, grey700Light } from './grey700';

export const mdGrey700: PaletteColor = {
  color: createFlexColor({
    containedColor: grey700,
    containedColorDisabled: disabledGrey300Contained,
    containedColorFactory: createContainedLayeredColor,
    containedInvertedColor: invertLayeredColor(grey700),
    containedInvertedColorDisabled: disabledGrey300Contained,
    uncontainedColor: createLayeredColorUsingOnColorOnly(grey700),
    uncontainedColorDisabled: disabledGrey600Uncontained,
    uncontainedColorFactory: createUncontainedLayeredColor,
    uncontainedInvertedColor: createLayeredColorUsingColorOnly(grey700),
    uncontainedInvertedColorDisabled: disabledGrey500Uncontained,
  }),
  name: 'Grey',
  tone: '700',
};

export const mdGrey700Dark: PaletteColor = {
  color: createFlexColor({
    containedColor: grey700Dark,
    containedColorDisabled: disabledGrey300Contained,
    containedColorFactory: createContainedLayeredColor,
    containedInvertedColor: invertLayeredColor(grey700Dark),
    containedInvertedColorDisabled: disabledGrey300Contained,
    uncontainedColor: createLayeredColorUsingOnColorOnly(grey700Dark),
    uncontainedColorDisabled: disabledGrey500Uncontained,
    uncontainedColorFactory: createUncontainedLayeredColor,
    uncontainedInvertedColor: createLayeredColorUsingColorOnly(grey700Dark),
    uncontainedInvertedColorDisabled: disabledGrey500Uncontained,
  }),
  name: 'Grey',
  tone: '700 Dark',
};

export const mdGrey700Light: PaletteColor = {
  color: createFlexColor({
    containedColor: grey700Light,
    containedColorDisabled: disabledGrey300Contained,
    containedColorFactory: createContainedLayeredColor,
    containedInvertedColor: invertLayeredColor(grey700Light),
    containedInvertedColorDisabled: disabledGrey300Contained,
    uncontainedColor: createLayeredColorUsingOnColorOnly(grey700Light),
    uncontainedColorDisabled: disabledGrey600Uncontained,
    uncontainedColorFactory: createUncontainedLayeredColor,
    uncontainedInvertedColor: createLayeredColorUsingColorOnly(grey700Light),
    uncontainedInvertedColorDisabled: disabledGrey500Uncontained,
  }),
  name: 'Grey',
  tone: '700 Light',
};
