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
  disabledGrey500Uncontained,
  disabledGrey600Uncontained,
} from '../disabled/uncontained';
import { yellow600, yellow600Dark, yellow600Light } from './yellow600';

export const mdYellow600: PaletteColor = {
  color: createMdFlexColor({
    containedColor: yellow600,
    containedColorDisabled: disabledGrey300Contained,
    containedInvertedColorDisabled: disabledGrey300Contained,
    uncontainedColorDisabled: disabledGrey600Uncontained,
    uncontainedInvertedColorDisabled: disabledGrey500Uncontained,
  }),
  name: 'Yellow',
  tone: '600',
};

export const mdYellow600Dark: PaletteColor = {
  color: createMdFlexColor({
    containedColor: yellow600Dark,
    containedColorDisabled: disabledGrey300Contained,
    containedInvertedColorDisabled: disabledGrey300Contained,
    uncontainedColorDisabled: disabledGrey600Uncontained,
    uncontainedInvertedColorDisabled: disabledGrey500Uncontained,
  }),
  name: 'Yellow',
  tone: '600 Dark',
};

export const mdYellow600Light: PaletteColor = {
  color: createMdFlexColor({
    containedColor: yellow600Light,
    containedColorDisabled: disabledGrey300Contained,
    containedInvertedColorDisabled: disabledGrey300Contained,
    uncontainedColorDisabled: disabledGrey600Uncontained,
    uncontainedInvertedColorDisabled: disabledGrey500Uncontained,
  }),
  name: 'Yellow',
  tone: '600 Light',
};
