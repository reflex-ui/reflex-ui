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
  disabledGrey500Uncontained,
  disabledGrey600Uncontained,
} from '../disabled/uncontained';
import { MaterialPaletteColorItem } from '../MaterialPaletteColorItem';
import { grey600Dark, grey600Light, grey600Normal } from './grey600';

export const mdGrey600: MaterialPaletteColorItem = {
  color: {
    dark: {
      inverted: {
        contained: createPaletteColorInteraction({
          colorVariant: invertPaletteColorVariant(grey600Dark),
          colorVariantFactory: createContainedPaletteColorVariant,
          disabledColorVariant: disabledGrey300Contained,
        }),
        uncontained: createPaletteColorInteraction({
          colorVariant: createPaletteColorVariantUsingColorOnly(grey600Dark),
          colorVariantFactory: createUncontainedPaletteColorVariant,
          disabledColorVariant: disabledGrey500Uncontained,
        }),
      },
      regular: {
        contained: createPaletteColorInteraction({
          colorVariant: grey600Dark,
          colorVariantFactory: createContainedPaletteColorVariant,
          disabledColorVariant: disabledGrey300Contained,
        }),
        uncontained: createPaletteColorInteraction({
          colorVariant: createPaletteColorVariantUsingOnColorOnly(grey600Dark),
          colorVariantFactory: createUncontainedPaletteColorVariant,
          disabledColorVariant: disabledGrey500Uncontained,
        }),
      },
    },
    light: {
      inverted: {
        contained: createPaletteColorInteraction({
          colorVariant: invertPaletteColorVariant(grey600Light),
          colorVariantFactory: createContainedPaletteColorVariant,
          disabledColorVariant: disabledGrey300Contained,
        }),
        uncontained: createPaletteColorInteraction({
          colorVariant: createPaletteColorVariantUsingColorOnly(grey600Light),
          colorVariantFactory: createUncontainedPaletteColorVariant,
          disabledColorVariant: disabledGrey500Uncontained,
        }),
      },
      regular: {
        contained: createPaletteColorInteraction({
          colorVariant: grey600Light,
          colorVariantFactory: createContainedPaletteColorVariant,
          disabledColorVariant: disabledGrey300Contained,
        }),
        uncontained: createPaletteColorInteraction({
          colorVariant: createPaletteColorVariantUsingOnColorOnly(grey600Light),
          colorVariantFactory: createUncontainedPaletteColorVariant,
          disabledColorVariant: disabledGrey600Uncontained,
        }),
      },
    },
    normal: {
      inverted: {
        contained: createPaletteColorInteraction({
          colorVariant: invertPaletteColorVariant(grey600Normal),
          colorVariantFactory: createContainedPaletteColorVariant,
          disabledColorVariant: disabledGrey300Contained,
        }),
        uncontained: createPaletteColorInteraction({
          colorVariant: createPaletteColorVariantUsingColorOnly(grey600Normal),
          colorVariantFactory: createUncontainedPaletteColorVariant,
          disabledColorVariant: disabledGrey500Uncontained,
        }),
      },
      regular: {
        contained: createPaletteColorInteraction({
          colorVariant: grey600Normal,
          colorVariantFactory: createContainedPaletteColorVariant,
          disabledColorVariant: disabledGrey300Contained,
        }),
        uncontained: createPaletteColorInteraction({
          colorVariant: createPaletteColorVariantUsingOnColorOnly(
            grey600Normal,
          ),
          colorVariantFactory: createUncontainedPaletteColorVariant,
          disabledColorVariant: disabledGrey600Uncontained,
        }),
      },
    },
  },
  name: 'Grey',
  tone: '600',
};
