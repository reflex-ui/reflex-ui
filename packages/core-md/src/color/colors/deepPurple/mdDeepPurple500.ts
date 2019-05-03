/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PaletteColor } from '@reflex-ui/core';

import { createMdFlexColor } from '../../createMdFlexColor';
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
  color: createMdFlexColor({
    containedColor: deepPurple500,
    containedColorDisabled: disabledGrey300Contained,
    containedInvertedColorDisabled: disabledGrey300Contained,
    uncontainedColorDisabled: disabledGrey500Uncontained,
    uncontainedInvertedColorDisabled: disabledGrey500Uncontained,
  }),
  name: 'Deep Purple',
  tone: '500',
};

export const mdDeepPurple500Dark: PaletteColor = {
  color: createMdFlexColor({
    containedColor: deepPurple500Dark,
    containedColorDisabled: disabledGrey300Contained,
    containedInvertedColorDisabled: disabledGrey300Contained,
    uncontainedColorDisabled: disabledGrey500Uncontained,
    uncontainedInvertedColorDisabled: disabledGrey500Uncontained,
  }),
  name: 'Deep Purple',
  tone: '500 Dark',
};

export const mdDeepPurple500Light: PaletteColor = {
  color: createMdFlexColor({
    containedColor: deepPurple500Light,
    containedColorDisabled: disabledGrey300Contained,
    containedInvertedColorDisabled: disabledGrey300Contained,
    uncontainedColorDisabled: disabledGrey400Uncontained,
    uncontainedInvertedColorDisabled: disabledGrey500Uncontained,
  }),
  name: 'Deep Purple',
  tone: '500 Light',
};
