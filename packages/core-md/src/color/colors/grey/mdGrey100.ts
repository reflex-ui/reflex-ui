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
import { grey100, grey100Dark, grey100Light } from './grey100';

export const mdGrey100: PaletteColor = {
  color: createFlexColor({
    containedColor: grey100,
    containedColorDisabled: disabledGrey300Contained,
    containedColorFactory: createContainedLayeredColor,
    containedInvertedColor: invertLayeredColor(grey100),
    containedInvertedColorDisabled: disabledGrey300Contained,
    uncontainedColor: createLayeredColorUsingOnColorOnly(grey100),
    uncontainedColorDisabled: disabledGrey600Uncontained,
    uncontainedColorFactory: createUncontainedLayeredColor,
    uncontainedInvertedColor: createLayeredColorUsingColorOnly(grey100),
    uncontainedInvertedColorDisabled: disabledGrey500Uncontained,
  }),
  name: 'Grey',
  tone: '100',
};

export const mdGrey100Dark: PaletteColor = {
  color: createFlexColor({
    containedColor: grey100Dark,
    containedColorDisabled: disabledGrey300Contained,
    containedColorFactory: createContainedLayeredColor,
    containedInvertedColor: invertLayeredColor(grey100Dark),
    containedInvertedColorDisabled: disabledGrey300Contained,
    uncontainedColor: createLayeredColorUsingOnColorOnly(grey100Dark),
    uncontainedColorDisabled: disabledGrey500Uncontained,
    uncontainedColorFactory: createUncontainedLayeredColor,
    uncontainedInvertedColor: createLayeredColorUsingColorOnly(grey100Dark),
    uncontainedInvertedColorDisabled: disabledGrey500Uncontained,
  }),
  name: 'Grey',
  tone: '100 Dark',
};

export const mdGrey100Light: PaletteColor = {
  color: createFlexColor({
    containedColor: grey100Light,
    containedColorDisabled: disabledGrey300Contained,
    containedColorFactory: createContainedLayeredColor,
    containedInvertedColor: invertLayeredColor(grey100Light),
    containedInvertedColorDisabled: disabledGrey300Contained,
    uncontainedColor: createLayeredColorUsingOnColorOnly(grey100Light),
    uncontainedColorDisabled: disabledGrey600Uncontained,
    uncontainedColorFactory: createUncontainedLayeredColor,
    uncontainedInvertedColor: createLayeredColorUsingColorOnly(grey100Light),
    uncontainedInvertedColorDisabled: disabledGrey500Uncontained,
  }),
  name: 'Grey',
  tone: '100 Light',
};
