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
  disabledGrey700Uncontained,
} from '../disabled/uncontained';
import { red900, red900Dark, red900Light } from './red900';

export const mdRed900: PaletteColor = {
  color: createMdFlexColor({
    containedColor: red900,
    containedColorDisabled: disabledGrey300Contained,
    containedInvertedColorDisabled: disabledGrey300Contained,
    uncontainedColorDisabled: disabledGrey500Uncontained,
    uncontainedInvertedColorDisabled: disabledGrey500Uncontained,
  }),
  name: 'Red',
  tone: '900',
};

export const mdRed900Dark: PaletteColor = {
  color: createMdFlexColor({
    containedColor: red900Dark,
    containedColorDisabled: disabledGrey300Contained,
    containedInvertedColorDisabled: disabledGrey300Contained,
    uncontainedColorDisabled: disabledGrey500Uncontained,
    uncontainedInvertedColorDisabled: disabledGrey500Uncontained,
  }),
  name: 'Red',
  tone: '900 Dark',
};

export const mdRed900Light: PaletteColor = {
  color: createMdFlexColor({
    containedColor: red900Light,
    containedColorDisabled: disabledGrey300Contained,
    containedInvertedColorDisabled: disabledGrey300Contained,
    uncontainedColorDisabled: disabledGrey700Uncontained,
    uncontainedInvertedColorDisabled: disabledGrey500Uncontained,
  }),
  name: 'Red',
  tone: '900 Light',
};
