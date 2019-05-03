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
  disabledGrey600Uncontained,
} from '../disabled/uncontained';
import { orange600, orange600Dark, orange600Light } from './orange600';

export const mdOrange600: PaletteColor = {
  color: createMdFlexColor({
    containedColor: orange600,
    containedColorDisabled: disabledGrey300Contained,
    containedInvertedColorDisabled: disabledGrey300Contained,
    uncontainedColorDisabled: disabledGrey600Uncontained,
    uncontainedInvertedColorDisabled: disabledGrey400Uncontained,
  }),
  name: 'Orange',
  tone: '600',
};

export const mdOrange600Dark: PaletteColor = {
  color: createMdFlexColor({
    containedColor: orange600Dark,
    containedColorDisabled: disabledGrey300Contained,
    containedInvertedColorDisabled: disabledGrey300Contained,
    uncontainedColorDisabled: disabledGrey400Uncontained,
    uncontainedInvertedColorDisabled: disabledGrey500Uncontained,
  }),
  name: 'Orange',
  tone: '600 Dark',
};

export const mdOrange600Light: PaletteColor = {
  color: createMdFlexColor({
    containedColor: orange600Light,
    containedColorDisabled: disabledGrey300Contained,
    containedInvertedColorDisabled: disabledGrey300Contained,
    uncontainedColorDisabled: disabledGrey600Uncontained,
    uncontainedInvertedColorDisabled: disabledGrey500Uncontained,
  }),
  name: 'Orange',
  tone: '600 Light',
};
