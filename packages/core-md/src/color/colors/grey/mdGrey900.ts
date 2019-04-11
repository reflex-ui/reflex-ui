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
import { grey900, grey900Dark, grey900Light } from './grey900';

export const mdGrey900: PaletteColor = {
  color: createFlexColor({
    containedColor: grey900,
    containedColorDisabled: disabledGrey300Contained,
    containedColorFactory: createContainedLayeredColor,
    containedInvertedColor: invertLayeredColor(grey900),
    containedInvertedColorDisabled: disabledGrey300Contained,
    uncontainedColor: createLayeredColorUsingOnColorOnly(grey900),
    uncontainedColorDisabled: disabledGrey600Uncontained,
    uncontainedColorFactory: createUncontainedLayeredColor,
    uncontainedInvertedColor: createLayeredColorUsingColorOnly(grey900),
    uncontainedInvertedColorDisabled: disabledGrey500Uncontained,
  }),
  name: 'Grey',
  tone: '900',
};

export const mdGrey900Dark: PaletteColor = {
  color: createFlexColor({
    containedColor: grey900Dark,
    containedColorDisabled: disabledGrey300Contained,
    containedColorFactory: createContainedLayeredColor,
    containedInvertedColor: invertLayeredColor(grey900Dark),
    containedInvertedColorDisabled: disabledGrey300Contained,
    uncontainedColor: createLayeredColorUsingOnColorOnly(grey900Dark),
    uncontainedColorDisabled: disabledGrey500Uncontained,
    uncontainedColorFactory: createUncontainedLayeredColor,
    uncontainedInvertedColor: createLayeredColorUsingColorOnly(grey900Dark),
    uncontainedInvertedColorDisabled: disabledGrey500Uncontained,
  }),
  name: 'Grey',
  tone: '900 Dark',
};

export const mdGrey900Light: PaletteColor = {
  color: createFlexColor({
    containedColor: grey900Light,
    containedColorDisabled: disabledGrey300Contained,
    containedColorFactory: createContainedLayeredColor,
    containedInvertedColor: invertLayeredColor(grey900Light),
    containedInvertedColorDisabled: disabledGrey300Contained,
    uncontainedColor: createLayeredColorUsingOnColorOnly(grey900Light),
    uncontainedColorDisabled: disabledGrey600Uncontained,
    uncontainedColorFactory: createUncontainedLayeredColor,
    uncontainedInvertedColor: createLayeredColorUsingColorOnly(grey900Light),
    uncontainedInvertedColorDisabled: disabledGrey500Uncontained,
  }),
  name: 'Grey',
  tone: '900 Light',
};
