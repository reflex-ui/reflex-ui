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
import { grey100Dark, grey100Light, grey100Normal } from './grey100';

export const mdGrey100: MaterialPaletteColorItem = {
  color: {
    dark: {
      inverted: {
        contained: createPaletteColorInteraction({
          colorVariant: invertPaletteColorVariant(grey100Dark),
          colorVariantFactory: createContainedPaletteColorVariant,
          disabledColorVariant: disabledGrey300Contained,
        }),
        uncontained: createPaletteColorInteraction({
          colorVariant: createPaletteColorVariantUsingColorOnly(grey100Dark),
          colorVariantFactory: createUncontainedPaletteColorVariant,
          disabledColorVariant: disabledGrey500Uncontained,
        }),
      },
      regular: {
        contained: createPaletteColorInteraction({
          colorVariant: grey100Dark,
          colorVariantFactory: createContainedPaletteColorVariant,
          disabledColorVariant: disabledGrey300Contained,
        }),
        uncontained: createPaletteColorInteraction({
          colorVariant: createPaletteColorVariantUsingOnColorOnly(grey100Dark),
          colorVariantFactory: createUncontainedPaletteColorVariant,
          disabledColorVariant: disabledGrey500Uncontained,
        }),
      },
    },
    light: {
      inverted: {
        contained: createPaletteColorInteraction({
          colorVariant: invertPaletteColorVariant(grey100Light),
          colorVariantFactory: createContainedPaletteColorVariant,
          disabledColorVariant: disabledGrey300Contained,
        }),
        uncontained: createPaletteColorInteraction({
          colorVariant: createPaletteColorVariantUsingColorOnly(grey100Light),
          colorVariantFactory: createUncontainedPaletteColorVariant,
          disabledColorVariant: disabledGrey500Uncontained,
        }),
      },
      regular: {
        contained: createPaletteColorInteraction({
          colorVariant: grey100Light,
          colorVariantFactory: createContainedPaletteColorVariant,
          disabledColorVariant: disabledGrey300Contained,
        }),
        uncontained: createPaletteColorInteraction({
          colorVariant: createPaletteColorVariantUsingOnColorOnly(grey100Light),
          colorVariantFactory: createUncontainedPaletteColorVariant,
          disabledColorVariant: disabledGrey600Uncontained,
        }),
      },
    },
    normal: {
      inverted: {
        contained: createPaletteColorInteraction({
          colorVariant: invertPaletteColorVariant(grey100Normal),
          colorVariantFactory: createContainedPaletteColorVariant,
          disabledColorVariant: disabledGrey300Contained,
        }),
        uncontained: createPaletteColorInteraction({
          colorVariant: createPaletteColorVariantUsingColorOnly(grey100Normal),
          colorVariantFactory: createUncontainedPaletteColorVariant,
          disabledColorVariant: disabledGrey500Uncontained,
        }),
      },
      regular: {
        contained: createPaletteColorInteraction({
          colorVariant: grey100Normal,
          colorVariantFactory: createContainedPaletteColorVariant,
          disabledColorVariant: disabledGrey300Contained,
        }),
        uncontained: createPaletteColorInteraction({
          colorVariant: createPaletteColorVariantUsingOnColorOnly(
            grey100Normal,
          ),
          colorVariantFactory: createUncontainedPaletteColorVariant,
          disabledColorVariant: disabledGrey600Uncontained,
        }),
      },
    },
  },
  name: 'Grey',
  tone: '100',
};
