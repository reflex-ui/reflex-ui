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
import { grey200Dark, grey200Light, grey200Normal } from './grey200';

export const mdGrey200: MaterialPaletteColorItem = {
  color: {
    dark: {
      inverted: {
        contained: createPaletteColorInteraction({
          colorVariant: invertPaletteColorVariant(grey200Dark),
          colorVariantFactory: createContainedPaletteColorVariant,
          disabledColorVariant: disabledGrey300Contained,
        }),
        uncontained: createPaletteColorInteraction({
          colorVariant: createPaletteColorVariantUsingColorOnly(grey200Dark),
          colorVariantFactory: createUncontainedPaletteColorVariant,
          disabledColorVariant: disabledGrey500Uncontained,
        }),
      },
      regular: {
        contained: createPaletteColorInteraction({
          colorVariant: grey200Dark,
          colorVariantFactory: createContainedPaletteColorVariant,
          disabledColorVariant: disabledGrey300Contained,
        }),
        uncontained: createPaletteColorInteraction({
          colorVariant: createPaletteColorVariantUsingOnColorOnly(grey200Dark),
          colorVariantFactory: createUncontainedPaletteColorVariant,
          disabledColorVariant: disabledGrey500Uncontained,
        }),
      },
    },
    light: {
      inverted: {
        contained: createPaletteColorInteraction({
          colorVariant: invertPaletteColorVariant(grey200Light),
          colorVariantFactory: createContainedPaletteColorVariant,
          disabledColorVariant: disabledGrey300Contained,
        }),
        uncontained: createPaletteColorInteraction({
          colorVariant: createPaletteColorVariantUsingColorOnly(grey200Light),
          colorVariantFactory: createUncontainedPaletteColorVariant,
          disabledColorVariant: disabledGrey500Uncontained,
        }),
      },
      regular: {
        contained: createPaletteColorInteraction({
          colorVariant: grey200Light,
          colorVariantFactory: createContainedPaletteColorVariant,
          disabledColorVariant: disabledGrey300Contained,
        }),
        uncontained: createPaletteColorInteraction({
          colorVariant: createPaletteColorVariantUsingOnColorOnly(grey200Light),
          colorVariantFactory: createUncontainedPaletteColorVariant,
          disabledColorVariant: disabledGrey600Uncontained,
        }),
      },
    },
    normal: {
      inverted: {
        contained: createPaletteColorInteraction({
          colorVariant: invertPaletteColorVariant(grey200Normal),
          colorVariantFactory: createContainedPaletteColorVariant,
          disabledColorVariant: disabledGrey300Contained,
        }),
        uncontained: createPaletteColorInteraction({
          colorVariant: createPaletteColorVariantUsingColorOnly(grey200Normal),
          colorVariantFactory: createUncontainedPaletteColorVariant,
          disabledColorVariant: disabledGrey500Uncontained,
        }),
      },
      regular: {
        contained: createPaletteColorInteraction({
          colorVariant: grey200Normal,
          colorVariantFactory: createContainedPaletteColorVariant,
          disabledColorVariant: disabledGrey300Contained,
        }),
        uncontained: createPaletteColorInteraction({
          colorVariant: createPaletteColorVariantUsingOnColorOnly(
            grey200Normal,
          ),
          colorVariantFactory: createUncontainedPaletteColorVariant,
          disabledColorVariant: disabledGrey600Uncontained,
        }),
      },
    },
  },
  name: 'Grey',
  tone: '200',
};
