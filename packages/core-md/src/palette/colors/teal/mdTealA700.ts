/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  createPaletteColorInteraction,
  createPaletteColorVariantUsingColorOnly,
  createPaletteColorVariantUsingOnColorOnly,
  invertPaletteColorVariant,
} from '@reflex-ui/core';

// tslint:disable-next-line:max-line-length
import { createContainedPaletteColorVariant } from '../../createContainedPaletteColorVariant';
// tslint:disable-next-line:max-line-length
import { createUncontainedPaletteColorVariant } from '../../createUncontainedPaletteColorVariant';
import { disabledGrey300Contained } from '../disabled/contained';
import {
  disabledGrey400Uncontained,
  disabledGrey500Uncontained,
  disabledGrey600Uncontained,
} from '../disabled/uncontained';
import { MaterialPaletteColorItem } from '../MaterialPaletteColorItem';
import { tealA700Dark, tealA700Light, tealA700Normal } from './tealA700';

export const mdTealA700: MaterialPaletteColorItem = {
  color: {
    dark: {
      inverted: {
        contained: createPaletteColorInteraction({
          colorVariant: invertPaletteColorVariant(tealA700Dark),
          colorVariantFactory: createContainedPaletteColorVariant,
          disabledColorVariant: disabledGrey300Contained,
        }),
        uncontained: createPaletteColorInteraction({
          colorVariant: createPaletteColorVariantUsingColorOnly(tealA700Dark),
          colorVariantFactory: createUncontainedPaletteColorVariant,
          disabledColorVariant: disabledGrey500Uncontained,
        }),
      },
      regular: {
        contained: createPaletteColorInteraction({
          colorVariant: tealA700Dark,
          colorVariantFactory: createContainedPaletteColorVariant,
          disabledColorVariant: disabledGrey300Contained,
        }),
        uncontained: createPaletteColorInteraction({
          colorVariant: createPaletteColorVariantUsingOnColorOnly(tealA700Dark),
          colorVariantFactory: createUncontainedPaletteColorVariant,
          disabledColorVariant: disabledGrey400Uncontained,
        }),
      },
    },
    light: {
      inverted: {
        contained: createPaletteColorInteraction({
          colorVariant: invertPaletteColorVariant(tealA700Light),
          colorVariantFactory: createContainedPaletteColorVariant,
          disabledColorVariant: disabledGrey300Contained,
        }),
        uncontained: createPaletteColorInteraction({
          colorVariant: createPaletteColorVariantUsingColorOnly(tealA700Light),
          colorVariantFactory: createUncontainedPaletteColorVariant,
          disabledColorVariant: disabledGrey500Uncontained,
        }),
      },
      regular: {
        contained: createPaletteColorInteraction({
          colorVariant: tealA700Light,
          colorVariantFactory: createContainedPaletteColorVariant,
          disabledColorVariant: disabledGrey300Contained,
        }),
        uncontained: createPaletteColorInteraction({
          colorVariant: createPaletteColorVariantUsingOnColorOnly(
            tealA700Light,
          ),
          colorVariantFactory: createUncontainedPaletteColorVariant,
          disabledColorVariant: disabledGrey600Uncontained,
        }),
      },
    },
    normal: {
      inverted: {
        contained: createPaletteColorInteraction({
          colorVariant: invertPaletteColorVariant(tealA700Normal),
          colorVariantFactory: createContainedPaletteColorVariant,
          disabledColorVariant: disabledGrey300Contained,
        }),
        uncontained: createPaletteColorInteraction({
          colorVariant: createPaletteColorVariantUsingColorOnly(tealA700Normal),
          colorVariantFactory: createUncontainedPaletteColorVariant,
          disabledColorVariant: disabledGrey500Uncontained,
        }),
      },
      regular: {
        contained: createPaletteColorInteraction({
          colorVariant: tealA700Normal,
          colorVariantFactory: createContainedPaletteColorVariant,
          disabledColorVariant: disabledGrey300Contained,
        }),
        uncontained: createPaletteColorInteraction({
          colorVariant: createPaletteColorVariantUsingOnColorOnly(
            tealA700Normal,
          ),
          colorVariantFactory: createUncontainedPaletteColorVariant,
          disabledColorVariant: disabledGrey600Uncontained,
        }),
      },
    },
  },
  name: 'Teal',
  tone: 'A700',
};
