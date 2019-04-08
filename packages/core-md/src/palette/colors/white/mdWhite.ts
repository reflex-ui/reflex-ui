/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  createPaletteColorInteraction,
  createPaletteColorVariantUsingOnColorOnly,
  invertPaletteColorVariant,
  PaletteColorInteraction,
  PaletteColorVariant,
} from '@reflex-ui/core';

// tslint:disable-next-line:max-line-length
import { createContainedPaletteColorVariant } from '../../createContainedPaletteColorVariant';
// tslint:disable-next-line:max-line-length
import { createUncontainedPaletteColorVariant } from '../../createUncontainedPaletteColorVariant';
import { black } from '../black/black';
import { disabledGrey300Contained } from '../disabled/contained';
import {
  disabledGrey500Uncontained,
  disabledGrey600Uncontained,
} from '../disabled/uncontained';
import { MaterialPaletteColorItem } from '../MaterialPaletteColorItem';
import { transparent } from '../transparent';
import { white } from './white';

const whiteRegularContainedBaseColor: PaletteColorVariant = {
  color: white,
  onColor: black,
};

const whiteDarkRegularUncontainedColorInteraction: PaletteColorInteraction = {
  activated: {
    color: '#e0e0e0',
    onColor: white,
  },
  disabled: disabledGrey500Uncontained,
  enabled: {
    color: transparent,
    onColor: white,
  },
  focused: {
    color: '#e0e0e0',
    onColor: white,
  },
  hovered: {
    color: '#f5f5f5',
    onColor: white,
  },
  pressed: {
    color: '#d6d6d6',
    onColor: white,
  },
};

export const mdWhite: MaterialPaletteColorItem = {
  color: {
    dark: {
      inverted: {
        contained: createPaletteColorInteraction({
          colorVariant: invertPaletteColorVariant(
            whiteRegularContainedBaseColor,
          ),
          colorVariantFactory: createContainedPaletteColorVariant,
          disabledColorVariant: disabledGrey300Contained,
        }),
        uncontained: whiteDarkRegularUncontainedColorInteraction,
      },
      regular: {
        contained: createPaletteColorInteraction({
          colorVariant: whiteRegularContainedBaseColor,
          colorVariantFactory: createContainedPaletteColorVariant,
          disabledColorVariant: disabledGrey300Contained,
        }),
        uncontained: createPaletteColorInteraction({
          colorVariant: createPaletteColorVariantUsingOnColorOnly(
            whiteRegularContainedBaseColor,
          ),
          colorVariantFactory: createUncontainedPaletteColorVariant,
          disabledColorVariant: disabledGrey500Uncontained,
        }),
      },
    },
    light: {
      inverted: {
        contained: createPaletteColorInteraction({
          colorVariant: invertPaletteColorVariant(
            whiteRegularContainedBaseColor,
          ),
          colorVariantFactory: createContainedPaletteColorVariant,
          disabledColorVariant: disabledGrey300Contained,
        }),
        uncontained: whiteDarkRegularUncontainedColorInteraction,
      },
      regular: {
        contained: createPaletteColorInteraction({
          colorVariant: whiteRegularContainedBaseColor,
          colorVariantFactory: createContainedPaletteColorVariant,
          disabledColorVariant: disabledGrey300Contained,
        }),
        uncontained: createPaletteColorInteraction({
          colorVariant: createPaletteColorVariantUsingOnColorOnly(
            whiteRegularContainedBaseColor,
          ),
          colorVariantFactory: createUncontainedPaletteColorVariant,
          disabledColorVariant: disabledGrey600Uncontained,
        }),
      },
    },
    normal: {
      inverted: {
        contained: createPaletteColorInteraction({
          colorVariant: invertPaletteColorVariant(
            whiteRegularContainedBaseColor,
          ),
          colorVariantFactory: createContainedPaletteColorVariant,
          disabledColorVariant: disabledGrey300Contained,
        }),
        uncontained: whiteDarkRegularUncontainedColorInteraction,
      },
      regular: {
        contained: createPaletteColorInteraction({
          colorVariant: whiteRegularContainedBaseColor,
          colorVariantFactory: createContainedPaletteColorVariant,
          disabledColorVariant: disabledGrey300Contained,
        }),
        uncontained: createPaletteColorInteraction({
          colorVariant: createPaletteColorVariantUsingOnColorOnly(
            whiteRegularContainedBaseColor,
          ),
          colorVariantFactory: createUncontainedPaletteColorVariant,
          disabledColorVariant: disabledGrey600Uncontained,
        }),
      },
    },
  },
  name: 'White',
};
