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
import { blue500, blue500Dark, blue500Light } from './blue500';

export const mdBlue500: PaletteColor = {
  color: createMdFlexColor({
    containedColor: blue500,
    containedColorDisabled: disabledGrey300Contained,
    containedInvertedColorDisabled: disabledGrey300Contained,
    uncontainedColorDisabled: disabledGrey400Uncontained,
    uncontainedInvertedColorDisabled: disabledGrey500Uncontained,
  }),
  name: 'Blue',
  tone: '500',
};

export const mdBlue500Dark: PaletteColor = {
  color: createMdFlexColor({
    containedColor: blue500Dark,
    containedColorDisabled: disabledGrey300Contained,
    containedInvertedColorDisabled: disabledGrey300Contained,
    uncontainedColorDisabled: disabledGrey500Uncontained,
    uncontainedInvertedColorDisabled: disabledGrey500Uncontained,
  }),
  name: 'Blue',
  tone: '500 Dark',
};

export const mdBlue500Light: PaletteColor = {
  color: createMdFlexColor({
    containedColor: blue500Light,
    containedColorDisabled: disabledGrey300Contained,
    containedInvertedColorDisabled: disabledGrey300Contained,
    uncontainedColorDisabled: disabledGrey600Uncontained,
    uncontainedInvertedColorDisabled: disabledGrey500Uncontained,
  }),
  name: 'Blue',
  tone: '500 Light',
};
