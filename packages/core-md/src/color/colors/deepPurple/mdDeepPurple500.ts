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
} from '../disabled/uncontained';
import {
  deepPurple500,
  deepPurple500Dark,
  deepPurple500Light,
} from './deepPurple500';

export const mdDeepPurple500: PaletteColor = {
  color: createFlexColor({
    containedColor: deepPurple500,
    containedColorDisabled: disabledGrey300Contained,
    containedColorFactory: createContainedLayeredColor,
    containedInvertedColor: invertLayeredColor(deepPurple500),
    containedInvertedColorDisabled: disabledGrey300Contained,
    uncontainedColor: createLayeredColorUsingOnColorOnly(deepPurple500),
    uncontainedColorDisabled: disabledGrey500Uncontained,
    uncontainedColorFactory: createUncontainedLayeredColor,
    uncontainedInvertedColor: createLayeredColorUsingColorOnly(deepPurple500),
    uncontainedInvertedColorDisabled: disabledGrey500Uncontained,
  }),
  name: 'Deep Purple',
  tone: '500',
};

export const mdDeepPurple500Dark: PaletteColor = {
  color: createFlexColor({
    containedColor: deepPurple500Dark,
    containedColorDisabled: disabledGrey300Contained,
    containedColorFactory: createContainedLayeredColor,
    containedInvertedColor: invertLayeredColor(deepPurple500Dark),
    containedInvertedColorDisabled: disabledGrey300Contained,
    uncontainedColor: createLayeredColorUsingOnColorOnly(deepPurple500Dark),
    uncontainedColorDisabled: disabledGrey500Uncontained,
    uncontainedColorFactory: createUncontainedLayeredColor,
    uncontainedInvertedColor: createLayeredColorUsingColorOnly(
      deepPurple500Dark,
    ),
    uncontainedInvertedColorDisabled: disabledGrey500Uncontained,
  }),
  name: 'Deep Purple',
  tone: '500 Dark',
};

export const mdDeepPurple500Light: PaletteColor = {
  color: createFlexColor({
    containedColor: deepPurple500Light,
    containedColorDisabled: disabledGrey300Contained,
    containedColorFactory: createContainedLayeredColor,
    containedInvertedColor: invertLayeredColor(deepPurple500Light),
    containedInvertedColorDisabled: disabledGrey300Contained,
    uncontainedColor: createLayeredColorUsingOnColorOnly(deepPurple500Light),
    uncontainedColorDisabled: disabledGrey400Uncontained,
    uncontainedColorFactory: createUncontainedLayeredColor,
    uncontainedInvertedColor: createLayeredColorUsingColorOnly(
      deepPurple500Light,
    ),
    uncontainedInvertedColorDisabled: disabledGrey500Uncontained,
  }),
  name: 'Deep Purple',
  tone: '500 Light',
};
